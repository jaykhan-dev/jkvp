---
sidebar: auto
---

# Algorand Standard Asset
Creating an asset in Algorand is simple and flexible.  The following code snippets is from their [official docs](https://developer.algorand.org/docs/get-details/asa/)

## JavaScript

### Parameters

```js
 let params = await algodclient.getTransactionParams().do();
    // comment out the next two lines to use suggested fee
    // params.fee = 1000;
    // params.flatFee = true;
```

### Note
```js
let note = undefined; // arbitrary data to be stored in the transaction; here, none is stored
    // Asset creation specific parameters
    // The following parameters are asset specific
    // Throughout the example these will be re-used. 
    // We will also change the manager later in the example
```

### Asset details
```js
let addr = recoveredAccount1.addr;
    // Whether user accounts will need to be unfrozen before transacting    
    let defaultFrozen = false;
    // integer number of decimals for asset unit calculation
    let decimals = 0;
    // total number of this asset available for circulation   
    let totalIssuance = 1000;
    // Used to display asset units to user    
    let unitName = "LATINUM";
    // Friendly name of the asset    
    let assetName = "latinum";
    // Optional string pointing to a URL relating to the asset
    let assetURL = "http://someurl";
    // Optional hash commitment of some sort relating to the asset. 32 character length.
    let assetMetadataHash = "16efaa3924a6fd9d3a4824799a4ac65d";
    // The following parameters are the only ones
    // that can be changed, and they have to be changed
    // by the current manager
    // Specified address can change reserve, freeze, clawback, and manager
    let manager = recoveredAccount2.addr;
    // Specified address is considered the asset reserve
    // (it has no special privileges, this is only informational)
    let reserve = recoveredAccount2.addr;
    // Specified address can freeze or unfreeze user asset holdings 
    let freeze = recoveredAccount2.addr;
    // Specified address can revoke user asset holdings and send 
    // them to other addresses    
    let clawback = recoveredAccount2.addr;
```

### Transactions
```js
// signing and sending "txn" allows "addr" to create an asset
    let txn = algosdk.makeAssetCreateTxnWithSuggestedParams(
        addr, 
        note,
        totalIssuance, 
        decimals, 
        defaultFrozen, 
        manager, 
        reserve, 
        freeze,
        clawback, 
        unitName, 
        assetName, 
        assetURL, 
        assetMetadataHash, 
        params);
```

### Signing the transaction
```js
    let rawSignedTxn = txn.signTxn(recoveredAccount1.sk)
    let tx = (await algodclient.sendRawTransaction(rawSignedTxn).do());
```

### Transaction confirmation
```js
 let assetID = null;
    // wait for transaction to be confirmed
    const ptx = await algosdk.waitForConfirmation(algodclient, tx.txId, 4);
    // Get the new asset's information from the creator account
    assetID = ptx["asset-index"];
    //Get the completed Transaction
    console.log("Transaction " + tx.txId + " confirmed in round " + ptx["confirmed-round"]);
```