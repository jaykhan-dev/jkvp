---
sidebar: auto
---

# Vue + Reach wallet dapp
[Reach](https://reach.sh/) is a way of building dapps that makes it easier.  It is still a new technology and there are many projects already using it. What is great about Reach is that one code-base can be deployed to multiple blockchains.

[Github Repo](https://github.com/nicholasburka/reach-vue-tutorial)

[Youtube](https://www.youtube.com/watch?v=ui1vYjZ2lRs)

[Official tutorial](https://developer.algorand.org/tutorials/build-a-web-dapp-algorand-wallet-interface-using-reach-and-vue/?from_query=vue)

## App.vue

```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Wallet v-on:connectWallet="connectWallet" v-on:fundWallet="fundWallet" :addr="this.addr" :bal="this.bal" :faucetLoading="this.faucetLoading"/>
  </div>
</template>

<script>
import Wallet from './components/Wallet.vue'
import * as reach from '@reach-sh/stdlib/ALGO.mjs'
export default {
  name: 'App',
  components: {
    Wallet
  },
  data: () => {
    return {
      acc: undefined,
      addr: undefined,
      balAtomic: undefined,
      bal: undefined,
      faucetLoading: false
      //currency: undefined
    }
  },
  methods: {
    async updateBalance() {
      try {
        this.balAtomic = await reach.balanceOf(this.acc)
        this.bal = String(reach.formatCurrency(this.balAtomic)).substr(0,6)
      } catch (err) {
        console.log(err)
      }
      
    },
    async connectWallet() {
      try {
        this.acc = await reach.getDefaultAccount()
        this.addr = await this.acc.getAddress()
        this.bal = await reach.balanceOf(this.acc)
      }
      catch (err) {
        console.log(err)
      }
    },
    async fundWallet() {
      this.faucetLoading = true
      try {
        const fundAmt = 10
        await reach.fundFromFaucet(this.acc, reach.parseCurrency(fundAmt))
        this.updateBalance()
      } catch (err) {
        console.log(err)
      }
      this.faucetLoading = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

## Wallet.vue

This code 

```html
<template>
	<div id="wallet">
		<img src="../assets/wallet.png" id="wallet-icon" v-on:click="connectWallet">
		<p>connect wallet</p>
		<div v-if="addr">
			<p id="addr">{{addr}}</p>
			<p id="bal">{{bal}} ALGO</p>
			<div id="faucet">
				<img src="../assets/faucet.png" id="faucet-icon" v-on:click="fundWallet">
				<p>fund wallet</p>
				<p>(this may take several seconds, devnets only)</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["addr", "bal", "faucetLoading"],
		methods: {
			connectWallet: function() {
				console.log("conn")
				this.$emit('connectWallet')
			},
			fundWallet: function() {
				this.$emit('fundWallet')
			}
		}
	}
</script>
```

## VueX

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as reach from '@reach-sh/stdlib/ALGO.mjs'

export default new Vuex.Store({
  state: {
    acc: undefined,
    addr: undefined,
    balAtomic: undefined,
    bal: undefined,
    balLoading: false
  },
  mutations: {
    setBalance(state, balAtomic) {
        state.balAtomic = balAtomic
        state.bal = reach.formatCurrency(balAtomic)
    },
    setBalLoading(state, isBalLoading) {
        state.balLoading = isBalLoading
    },
    setAcc(state, {acc, addr}) {
        state.acc = acc
        state.addr = addr
    }
  },
  actions: {
    async updateBalance({state, commit}) {
        try {
          console.log(state.acc)
          const balAtomic = await reach.balanceOf(state.acc)
          console.log(state.acc)
          console.log(balAtomic)
          commit('setBalance', balAtomic)  
      } catch (err) {
          console.log(err)
      }
    },
    async connectWallet({commit, dispatch}) {
        try {
            const acc = await reach.getDefaultAccount()
            console.log(acc)
            const addr = await acc.getAddress()
            commit('setAcc', {acc,addr})
            dispatch('updateBalance')
        }
        catch (err) {
            console.log(err)
        }
    },
    async fundWallet({state, commit, dispatch}) {
        commit('setBalLoading', true)
        try {
            const fundAmt = 10
            await reach.fundFromFaucet(state.acc, reach.parseCurrency(fundAmt))
            dispatch('updateBalance')
        } catch (err) {
            console.log(err)
        }
        commit('setBalLoading', false)
    }
  },
  modules: {
  }
})
```