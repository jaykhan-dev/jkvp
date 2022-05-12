# Latest Algorand Block
This code snippet uses the PureStake API to get the latest block in a Vue component. The base server is the [TestNet](https://developer.algorand.org/docs/get-details/algorand-networks/testnet/) for Algorand.  This is useful to test out code before deploying to production and the MainNet. 

It is important to note that the PureStake API key is required.  This is obtained from the [PureStake](https://www.purestake.com/) website once you make an account. 

## Vue JS component

```js
<script>
// CONSTANTS
const pureStakeKey = "API KEY FROM PURESTAKE API";
const algosdk = require("algosdk");
const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";
const token = {
  "X-API-Key": pureStakeKey
};
const algodClient = new algosdk.Algodv2(token, baseServer, port);

export default {
  created () {
    this.waitForNewBlock();
  },
  methods: {
    async waitForNewBlock() {
      let status = (await algodClient.status().do());
      let lastRound = status["last-round"];
      // eslint-disable-next-line no-constant-condition
      while (true) {
        this.$emit('lastRound', lastRound)
        lastRound++;
        await algodClient.statusAfterBlock(lastRound).do();
      }
    }
  }
}
</script>
```