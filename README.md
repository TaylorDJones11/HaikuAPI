# Haiku Generator API 📝

Welcome to the Haiku Generator API! This API allows users to generate beautiful haikus using OpenAI's GPT model. The API is managed using [Zuplo](https://zuplo.com/) and monetized through [Stripe](https://stripe.com/).

## Features

- **Generate Haikus:** Uses OpenAI's GPT models to generate creative and unique haikus.
- **API Management:** Zuplo manages the API, handles rate limiting, caching, and more.
- **Monetization:** Stripe is integrated for handling payments and subscriptions for API usage.

## Technologies Used

- Node.js
- Express.js
- OpenAI API
- Zuplo API Management
- Stripe Payment Gateway


### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [OpenAI API Key](https://platform.openai.com/signup)
- [Stripe API Key](https://stripe.com/docs/keys)
- [Zuplo API Key](https://zuplo.com/docs)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/taylor-haiku-api.git
   cd taylor-haiku-api

2. Installation
    ```bash
    npm install
4. Create a .env file in the root directory and add your API Keys;

   ```bash
    OPENAI_API_KEY=your_openai_api_key
    STRIPE_API_KEY=your_stripe_api_key
    ZUPLO_API_KEY=your_zuplo_api_key


### Usage

1. Start the API locally:
   ```bash
     npm start
2. Generate a Haiku:
   ```bash
   GET /haiku


### Stripe Integration
The API is monetized using Stripe. Users can subscribe to different tiers for API access:

- Free Tier: Limited to 2 requests per month.
- Silver Tier: $10/month for 5 requests.
- Gold Tier: $50/month for 10 requests.
  
Payment Flow
- Sign up for a plan via Stripe Checkout.
- Receive an API key upon successful payment.
- Use the API with the provided API key in the request headers.

