---
sidebar: auto
---

# Metamask

[Official website](https://metamask.io/)

>A crypto wallet & gateway to blockchain apps

## Connect to a Metamask wallet

The following code snippets use Vanilla JS to connect to a MetaMask account.  There is no other functionality. 

Code from [this repo](https://github.com/designcourse/metamask-connect-vanilla-js)

### Project setup

```bash
mkdir metamask-connect
cd metamask-connect
npm init -y
npm i @metamask/onboarding
npm i parcel -g
```

### Parcel

To see the live server, go to `localhost:1234`

```bash
parcel index.html
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <div class="onboard-container">
        <div class="loader">
            <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_lndg7fhf.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
        </div>
        <div class="up">
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_kfzgxkvq.json"  background="transparent"  speed="1" loop  autoplay></lottie-player>
        </div>
        <div class="confetti">
            <lottie-player class="success-anim" src="https://assets10.lottiefiles.com/packages/lf20_rovf9gzu.json"  background="transparent"  speed="1"></lottie-player>
        </div>
        <h1></h1>
        <p class="desc"></p>
        <a href="#" class="onboard"></a>
    </div>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <script src="index.js" type="module"></script>
</body>
</html>
```
### JavaScript
Where the magic happens.  Create a `index.js` file in the root folder.

```js
import MetaMaskOnboarding from '@metamask/onboarding';
const player = document.querySelector(".success-anim");

const onboarding = new MetaMaskOnboarding();
const btn = document.querySelector('.onboard');
const statusText = document.querySelector('h1');
const statusDesc = document.querySelector('.desc');
const loader = document.querySelector('.loader');
const upArrow = document.querySelector('.up');
const confetti = document.querySelector('.confetti');

const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
}

let connected = (accounts) => {
    statusText.innerHTML = 'Connected!'
    statusDesc.classList.add('account');
    statusDesc.innerHTML = accounts[0]
    btn.style.display = 'none';
    loader.style.display = 'none';
    upArrow.style.display = 'none';
    confetti.style.display = 'block';
    player.play();
    statusDesc.classList.add('account');
}

async function connectWallet() {
    return await ethereum.request({ method: 'eth_accounts' });
}

const onClickInstallMetaMask = () => {
    onboarding.startOnboarding();
    loader.style.display = 'block';
}

btn.addEventListener('click', async () => {
    btn.style.backgroundColor = '#cccccc';
    loader.style.display = 'block';

    try {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'})
        connected(accounts)
    } catch (error) {
        console.error(error);
    }
})

const MetaMaskClientCheck = () => {
    if (!isMetaMaskInstalled()) {
        statusText.innerText = 'You need to Install a Wallet';
        statusDesc.innerText = 'We recommend the MetaMask wallet.';
        btn.innerText = 'Install MetaMask'
        btn.onclick = onClickInstallMetaMask;
    } else {
 
        connectWallet().then((accounts) => {
            if (accounts && accounts[0] > 0) {
                connected(accounts)
            } else {
                statusText.innerHTML = 'Connect your wallet'
                statusDesc.innerHTML = `To begin, please connect your MetaMask wallet.`
                btn.innerText = 'Connect MetaMask'
                upArrow.style.display = 'block';
            }
        })
    }
}

MetaMaskClientCheck()
```

### CSS

Create a folder and create a CSS file like so: `css/main.css` 

```css
body {
    margin: 0;
    height: 100vh;
    display: grid;
    place-content: center;
    background: rgba(0,0,0,.05);
    font-family: 'Nunito';
}

h1 {
    font-size: 2.4rem;
}

.onboard-container {
    box-shadow: 10px 10px 30px rgba(0,0,0,.1);
    border-radius: .7em;
    padding: 4em;
    background: white;
    min-width: 500px;
    text-align: center;
}

.onboard {
    background-color: rgb(76, 0, 255);
    color: white;
    display: inline-block;
    text-decoration: none;
    padding: .7em;
    text-align: center;
    font-size: 1.3rem;
    border-radius: .3em;
    margin-top: 2em;
}

p {
    font-size: 1.125rem;
}

.loader {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    display: none;
}

.account {
    background: rgb(233, 233, 233);
    padding: .3em;
    border-radius: .3em;
    position: relative;
    display: inline-block;
    text-indent: 1.2em;
}

.account:before {
        position: absolute;
        content: "";
        background: green;
        width: .7em;
        height: .7em;
        border-radius: 50%;
        left: .5em;
        top: .6em;
}

.up {
    position: absolute;
    top: 2em;
    right: 2em;
    width: 10em;
    display: none;
}

.confetti {
    position: absolute;
    width: 20em;
    z-index: 2;
    display: none;
}
```