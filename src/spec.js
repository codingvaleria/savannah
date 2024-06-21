const specs = [
  {
    name: "Rick and Morty GraphQL API",
    apiName: "rick-and-morty-graphql",
    tutorialMarkdown: `
### Rick and Morty GraphQL API: A Quick Start Guide

Welcome to the Rick and Morty GraphQL API! This guide will walk you through the basic use cases for the API, helping you to retrieve and manipulate data from the popular TV show. Whether you're a developer looking to integrate Rick and Morty data into your project or just a fan curious about the show's universe, this guide is for you.

## What is GraphQL?

GraphQL is a query language for APIs that allows clients to request exactly the data they need. It enables more efficient and flexible data retrieval compared to REST APIs. With GraphQL, you can specify the structure of the response, which can reduce the amount of data transferred over the network and simplify client-side code.

## Getting Started

To use the Rick and Morty GraphQL API, you'll need to send HTTP POST requests to the API endpoint. You can use tools like [Postman](https://www.postman.com/), or your favorite code editor to make these requests.

### API Endpoint

The base URL for the Rick and Morty GraphQL API is: [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql)

### EndPoints

- **Characters**: Information about characters appearing in the series.
- **Locations**: Details on various locations featured in the show.
- **Episodes**: Data related to each episode, including air date, episode number, and characters appearing in each episode.

### Use Cases
 ##### For Developers:
1. Building Dynamic Features Fan sites, trivia games, educational tools related to storytelling or animation.
2. Use GraphQL queries to fetch specific data for personalized user experiences.

 ##### For Business Owners:
 1. Develop interactive features such as character encyclopedias, episode trackers, or fan portals.
 2. Potential for unique marketing campaigns.

    `,
  },

  {
    name: "Rick and Morty API",
    apiName: "rick-and-morty",
    specPath: "/rick-and-morty.json",
    shouldAllowTry: true,
    tutorialMarkdown: `

### Rick and Morty API Documentation

Welcome to the official documentation for the Rick and Morty API. This API provides access to data from the popular animated TV series "Rick and Morty," created by Justin Roiland and Dan Harmon. The API serves as a comprehensive resource for developers looking to integrate information about characters, locations, and episodes into their applications.

#### Overview

The Rick and Morty API is RESTful and uses standard HTTP methods for interacting with resources. It returns JSON-encoded responses and supports various endpoints for retrieving specific data types:

- **Characters**: Information about characters appearing in the series.
- **Locations**: Details on various locations featured in the show.
- **Episodes**: Data related to each episode, including air date, episode number, and characters appearing in each episode.

#### Authentication

The API does not currently require authentication, allowing easy access to its endpoints for development and testing purposes. However, rate limits are enforced to ensure fair usage for all consumers.

#### Endpoints

The API offers several endpoints to access different types of data:

- **Character Endpoints**: Retrieve information about characters, such as their name, species, status, and origin location.
- **Location Endpoints**: Access details about locations featured in the series, including name, type, dimension, and residents.
- **Episode Endpoints**: Obtain information about episodes, including their name, air date, episode number, and list of characters appearing in each episode.

#### Use Cases
 ##### For Developers:
1. Building Dynamic Features Fan sites, trivia games, educational tools related to storytelling or animation.
2. Use GraphQL queries to fetch specific data for personalized user experiences.

 ##### For Business Owners:
 1. Develop interactive features such as character encyclopedias, episode trackers, or fan portals.
 2. Potential for unique marketing campaigns.

#### Rate Limiting

To ensure optimal performance and availability for all users, the API enforces rate limits. These limits are designed to prevent abuse and maintain a high-quality experience for developers integrating the API into their applications.

#### Getting Started

To begin using the Rick and Morty API, developers can explore the available endpoints and start making requests to retrieve data. Detailed descriptions of each endpoint, along with example requests and responses, are provided in the specific API documentation sections.

#### Feedback and Support

For questions, feedback, or support related to the Rick and Morty API, developers can reach out through the official channels provided in the documentation. The API is maintained to ensure compatibility and reliability, with updates and improvements made periodically based on community feedback and series developments.

#### Conclusion

The Rick and Morty API offers a wealth of information about characters, locations, and episodes from the beloved animated series. Developers can leverage this API to create innovative applications and experiences that resonate with fans of "Rick and Morty." Explore the documentation to start integrating this exciting universe into your projects today!
    `,
  },
  {
    name: "Unsplash API",
    apiName: "unsplash",
    specPath: "/unsplash.json",
    shouldAllowTry: false,
    tutorialMarkdown: `
### Unsplash API Documentation

Welcome to the official documentation for the Unsplash API, a powerful tool for accessing high-quality photos from around the world. This API enables developers to integrate stunning photography directly into their applications, providing a rich visual experience for users.

#### Overview

The Unsplash API is RESTful and designed to be easy to use, offering endpoints that allow developers to search for photos, retrieve curated collections, and access information about photographers and users. The API primarily serves JSON-formatted responses, ensuring compatibility and ease of integration across various platforms.

#### Authentication

 Authentication with the Unsplash API is required for certain endpoints to ensure security and track usage. Developers can [authenticate](https://unsplash.com/documentation#authorization) using OAuth 2.0, which provides secure access to user-specific data and actions.

#### Endpoints

The API provides several endpoints to retrieve and interact with different types of data:

- **Photo Endpoints**: Retrieve information about specific photos, including their URLs, dimensions, and metadata.
- **Search Endpoints**: Perform searches for photos based on keywords, categories, or specific criteria.
- **Collection Endpoints**: Access curated collections of photos, including featured collections and user-created collections.
- **User Endpoints**: Obtain information about photographers and users, including their profiles, portfolios, and uploaded photos.
#### Getting Started

To begin using the Unsplash API, developers need to [register](https://unsplash.com/documentation#creating-a-developer-account) for an API key, which is required for authentication. Detailed documentation and examples are provided to guide developers through the integration process, including how to authenticate requests and handle responses.

#### Use cases
##### For Developers: 
1. Easy Integration for Enhanced UX
2. Building Dynamic Features especially for image heavy platforms. e.g Travel Apps, 

##### For Business Owners:
1. Enhancing Market Campaigns.
2. Improving User Engagement.
3. Streamlining Content Creation.


#### Rate Limiting

To ensure fair usage and maintain performance, the Unsplash API enforces rate limits on requests. Rate limits are based on the API key used for authentication and are designed to prevent abuse while allowing for efficient access to data.



#### Feedback and Support

For assistance, feedback, or to report issues related to the Unsplash API, developers can refer to the official documentation and support channels provided by Unsplash. The API is actively maintained to ensure reliability and compatibility with evolving web and mobile platforms.

#### Conclusion

The Unsplash API offers developers a robust solution for incorporating high-quality photos into their applications. Whether building a website, mobile app, or creative tool, developers can leverage the API's extensive features to deliver visually engaging experiences. Explore the documentation to start integrating stunning photography from Unsplash today!
    `,
  },
];

export default specs;
