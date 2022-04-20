---
sidebar: auto
---

# Coinstack
[See Prototype](https://coinstack.netlify.app)

![Coinstack Home View](/images/work/coinstack/coinstack-screenshot.png)

**Freelance project**

Coinstack is a crypto asset dashboard that pulls data from APIs.  It is meant to be a full utility dashboard with all the features that you might need to manage, sell, buy, exchange, and transact with cryptocurrencies.  See below for more details. 

## UX
There are an abundance of crypto platforms and dashboards.  Why make another?

This dashboard is designed to be feature rich but a lot simpler than the traditional designs that companies like Binance might have.  For new comers, it can be overwhelming to try and understand all the information.  This design is meant to simplify and only show information that is pertinent and relevant.

## Features

### Sidebar
- Dashboard: *currently the only view*
- Buy/Sell: Marketplace to purchase and sell.  Will require an API connection.
- Transactions: Sending and receiving crypto settings
- Exchange: Swapping assets (i.e. Bitcoin to Ethereum)
- Tools: Account details

### Coin Prices
Once coins have been selected at the top, the current prices will be listed with scrollable boxes.  Prices are listed in USD. 

### Impression
The crypto industry is known for its volatility.  For those who wish to keep an eye on the prices while also 

### Activity
In this section all transactions are listed with the coin, amount and address. 

### Price Monitor detail
A more detailed graphic of how much the price has gained/lost. Once hooked up with an API, it would change in real-time. 

### Portfolio information
The account holdings are listed here and graphics are used to denominate how much for each one.  The total is displayed by counting all the assets on the right.

## Technology
This project was created using [Vue](https://vuejs.org/) and [Vuetify](https://vuetifyjs.com/en/).  These frontend frameworks are great for creating user interfaces with built-in components.  There are also plenty of external node packages that can be added to enchance the UX.

Vue JS is used for building SPA's which essentially means that data is loaded in real-time, similar to AJAX back in the day.  This is great for user interfaces that handle lots of changing data and need to be updated simultaneously. 

Vuetify was built on Material components which means that it has accessibility built-in and will work on different devices.  Sort of like a build-once-run-everywhere. 

## Wireframes
Made with Adobe XD.  

![Coinstack Wireframe](/images/work/coinstack/coinstack-wireframe.png)
