# ERP System Project Documentation

## Overview

This ERP (Enterprise Resource Planning) system is designed to manage products, orders, and delivery status for a business. The application consists of several key functionalities:

1. **Dashboard**: Provides an overview of important metrics, including the total number of products, total number of orders, highest cost of products, and the least cost of products.

2. **Products Management**: Allows users to add, manage, and view details of products. Users can input product information such as name, category, price, and stock quantity. The added products are displayed in a list format.

3. **Orders Management**: Allows users to view information about orders and check the delivery status. The orders are displayed in a table, showing details such as order ID, customer name, order date, and status. Additionally, a calendar is implemented to visualize the expected delivery dates.

## Dashboard Functionality

The dashboard provides a summarized view of the business's key metrics:

- **Total Number of Products**: Displays the total count of products available in the system.
- **Total Number of Orders**: Shows the total count of orders placed.
- **Highest Cost**: Indicates the highest cost among all the available products.
- **Least Cost**: Displays the least cost among all the available products.

## Products Management Functionality

The Products Management section allows users to:

- **Add Products**: Users can input product details such as name, category, price, and stock quantity using a form.
- **View Products List**: A list displays all the added products with details like name, category, price, and stock quantity.
- **Delete Products**: Users can delete products from the list.

## Orders Management Functionality

The Orders Management section provides functionality to:

- **View Orders List**: Displays a table containing information about each order, including order ID, customer name, order date, and status.
- **Delete Orders**: Allows users to delete orders from the list.
- **Calendar Display**: A calendar visualizes the expected delivery dates for the orders.

## Local Storage Integration

To persist data between sessions, the application utilizes the browser's local storage. Products added and modified are saved to local storage, ensuring data persistence even if the user refreshes the page or closes the browser.

This ERP system is designed for simplicity and ease of use, providing essential functionalities for managing products, orders, and delivery status.
