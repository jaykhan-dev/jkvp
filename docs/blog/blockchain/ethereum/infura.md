---
sidebar: auto
---

# Infura

[Infura](https://infura.io/) is a way to interacting with the Ethereum blockchain without downloading a full node.  This is important because it makes it easier to 
develop [dapps](https://ethereum.org/en/dapps/#what-are-dapps).

## Python

We will be using Python in this tutorial because it is a great language for beginners and professional alike.  While you would not code a blockchain in Python due
to the slowness of the language, it is simple and intuitive to do simple tasks. 

## Get the latest Ethereum block

This code snippet below will return the latest block for the Ethereum blockchain using `web3.py`.

This is for the windows terminal

```bash
mkdir web3
cd web3
python -m venv venv
venv\Scripts\activate.bat
python -m pip install --upgrade pip
pip install web3
```

Type `python3` into your terminal and then write each of these lines one by one.
Note you will need an API key from Infura.

```python
from web3 import Web3
infura_url = " ENTER API LINK HERE "
w3 = Web3(Web3.HTTPProvider(infura_url))
w3.isConnected()
w3.eth.blockNumber
```
![infura](/images/blog/ethereum/Infura-100.jpg)

You should see a result similar to `14220698`

![latest block](/images/blog/ethereum/eth-latest-block-100.jpg)

