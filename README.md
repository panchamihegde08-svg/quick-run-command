# Grocerly POS

Create a complete, advanced, professional Grocery Shop Billing and POS Software using Vite + React + TypeScript.

Tech Stack:

Vite

React

TypeScript

Tailwind CSS

React Router DOM

Zustand for state management

shadcn/ui components

Lucide React icons

Recharts for charts

React Hook Form with Zod validation

IndexedDB using Dexie.js for offline data storage

jsPDF for invoice PDF generation

SheetJS (xlsx) for Excel import and export

JsBarcode for barcode generation

html5-qrcode for camera barcode scanning

Framer Motion for smooth animations

Application Name:
Smart Grocery POS

Design:
Create a premium, modern, clean grocery billing dashboard using a green, white, dark gray, and orange color theme.

The application must have:

Responsive desktop, tablet, and mobile design

Collapsible sidebar

Top navigation bar

Light mode and dark mode

Smooth animations

Modern cards

Professional tables

Search and filter options

Loading animations

Success and error notifications

Touch-friendly billing buttons

Indian currency format: ₹

Indian date format: DD/MM/YYYY

Create these user roles:

Admin

Shop Owner

Manager

Cashier

Inventory Staff

Accountant

Add role-based access so users can access only authorized pages.

Sidebar Menu:

Dashboard

POS Billing

Products

Categories

Brands

Inventory

Purchases

Suppliers

Customers

Sales History

Sales Returns

Expenses

Offers and Discounts

Employees

Reports

Settings

Logout

Dashboard:
Create dashboard cards showing:

Today’s Sales

Today’s Profit

Total Bills

Total Products

Total Customers

Low-Stock Products

Out-of-Stock Products

Products Expiring Soon

Pending Supplier Payments

Add:

Daily sales chart

Weekly sales chart

Monthly sales chart

Sales versus profit chart

Payment method chart

Top-selling products

Low-stock products

Recent sales

Recent stock activity

Recent notifications

POS Billing Page:
Create a fast, professional, full-screen billing interface.

Layout:

Left side: Product search and product grid

Center: Shopping cart

Right side: Customer details, bill summary, payment, and checkout

Product search:

Search by product name

Search by barcode

Search by SKU

Search by category

Search by brand

Barcode scanner support

Camera barcode scanner

Add products by clicking product cards

Product card:

Product image

Product name

Selling price

Available stock

Add to cart button

Shopping cart:

Product image

Product name

Unit price

Quantity

Increase quantity

Decrease quantity

Manual quantity input

Remove product

Product discount

Total amount

Support:

Pieces

Kilograms

Grams

Liters

Milliliters

Packets

Boxes

Dozens

Billing features:

Automatic subtotal

Automatic GST calculation

Product discount

Bill discount

Percentage discount

Fixed amount discount

Coupon code

Buy One Get One offer

Combo offers

Round-off

Grand total

Customer selection

Add customer directly during billing

Customer mobile number search

Customer credit or udhaar

Add bill notes

Hold bill

Resume held bill

Clear cart

Cancel bill

Save draft

Payment methods:

Cash

UPI

Card

Bank Transfer

Customer Credit

Split Payment

Payment section:

Amount received

Remaining amount

Change to return

Payment confirmation

After completing a sale:

Generate invoice number

Save the sale

Automatically reduce stock

Create a GST invoice

Print thermal receipt

Download invoice as PDF

Print A4 invoice

Reprint invoice

Share invoice through WhatsApp

Thermal Receipt:
Include:

Shop logo

Shop name

Address

Phone number

GSTIN

Invoice number

Date and time

Cashier name

Customer name

Product details

Quantity

Price

Discount

GST

Grand total

Payment method

Thank-you message

Product Management:
Create:

Product list

Add product

Edit product

Delete product

View product

Product fields:

Product image

Product name

Product ID

Barcode

SKU

Category

Subcategory

Brand

Unit

Purchase price

Selling price

MRP

GST percentage

HSN code

Current stock

Minimum stock

Reorder level

Batch number

Manufacturing date

Expiry date

Supplier

Shelf location

Description

Active or inactive status

Product features:

Search

Filter

Sort

Pagination

Bulk Excel import

Excel export

Bulk price update

Bulk stock update

Barcode generation

Barcode label printing

Product image upload

Inventory:
Create:

Current stock

Stock-in

Stock-out

Stock adjustment

Damaged stock

Expired stock

Wastage

Physical stock count

Stock audit

Stock transfer

Stock movement history

Inventory valuation

Add:

Automatic stock reduction after sales

Automatic stock increase after purchases

Low-stock alerts

Out-of-stock alerts

Reorder alerts

Expiry alerts

Batch-wise stock tracking

Product stock ledger

Purchase Management:
Create:

Purchase order

Add purchase

Purchase invoice

Receive stock

Purchase history

Purchase return

Supplier payment

Pending payment

When a purchase is completed:

Increase product stock automatically

Update purchase price

Save supplier transaction

Update supplier balance

Supplier Management:
Fields:

Supplier name

Company name

Mobile number

Email

GSTIN

Address

Opening balance

Current balance

Features:

Add supplier

Edit supplier

Delete supplier

Supplier purchase history

Supplier payment history

Supplier ledger

Outstanding balance

Customer Management:
Fields:

Customer name

Mobile number

Email

Address

GSTIN

Customer type

Credit limit

Features:

Add customer

Edit customer

Delete customer

Customer purchase history

Customer credit balance

Customer payment history

Customer ledger

Loyalty points

Wallet balance

Loyalty System:

Earn points for purchases

Redeem points during billing

Bronze membership

Silver membership

Gold membership

Platinum membership

Customer discounts

Birthday offers

Cashback wallet

Sales:

View all invoices

Search invoice

Filter by date

Filter by customer

Filter by cashier

Filter by payment method

View invoice

Print invoice

Download PDF

Reprint receipt

Cancel invoice with admin permission

Sales Returns:

Full return

Partial return

Return using invoice number

Return quantity validation

Refund

Return reason

Add returned stock back to inventory

Return history

Expense Management:

Add expense

Edit expense

Delete expense

Expense categories:

Rent

Electricity

Salary

Transport

Maintenance

Other

Upload expense receipt

Monthly expense summary

Expense reports

Offers:

Percentage discount

Fixed discount

Product discount

Category discount

Brand discount

Buy One Get One

Buy 2 Get 1

Combo offer

Coupon code

Festival offer

Customer-specific offer

Start date

End date

Active or inactive status

Employee Management:

Add employee

Edit employee

Delete employee

Employee role

Login access

Permissions

Employee status

Shift details

Cashier sales report

Employee activity history

Reports:
Create reports with date filters and export options:

Daily sales report

Weekly sales report

Monthly sales report

Yearly sales report

Product-wise sales report

Category-wise sales report

Brand-wise sales report

Cashier-wise sales report

Customer-wise sales report

Payment method report

GST report

Tax report

Profit and loss report

Gross profit report

Purchase report

Supplier report

Inventory report

Stock valuation report

Low-stock report

Expiry report

Stock movement report

Sales return report

Purchase return report

Expense report

Customer credit report

Supplier pending-payment report

Day-end closing report

Add:

Print report

Download PDF

Export Excel

Export CSV

Date range filter

GST:

CGST

SGST

IGST

GST-inclusive price

GST-exclusive price

HSN code

GST invoice

GST summary

Tax-wise sales report

Shop GSTIN

Customer GSTIN

Settings:

Shop name

Shop logo

Shop address

Mobile number

Email

GSTIN

Invoice prefix

Automatic invoice numbering

Currency

Financial year

GST settings

Receipt design

Thermal printer settings

Invoice template

Light mode

Dark mode

Notification settings

Backup and restore

Offline Mode:
Use IndexedDB with Dexie.js.

Implement:

Offline product data

Offline billing

Offline customer data

Offline invoices

Offline inventory updates

Online and offline status indicator

Sync queue

Automatically synchronize data when the internet returns

Do not lose bills if the internet disconnects

Sample Data:
Create:

At least 50 realistic grocery products

Rice

Wheat flour

Cooking oil

Milk

Biscuits

Snacks

Beverages

Spices

Soaps

Detergents

Fruits

Vegetables

Packaged foods

Sample customers

Sample suppliers

Sample invoices

Sample inventory records

Important Rules:

Use Vite + React + TypeScript

Use reusable components

Use clean and modular code

Use TypeScript interfaces

Do not create only a static UI

Make every button functional

Make all forms functional

Add validation to all forms

Add search, filters, sorting, and pagination

Use IndexedDB to save data

Add confirmation before deleting records

Add loading states

Add empty states

Add error handling

Add toast notifications

Optimize for thousands of products

Use React lazy loading

Make the POS page very fast

Add keyboard shortcuts for billing

Make the application fully responsive

Add a professional README file

Add installation instructions

Add an .env.example file

Run the project using:

npm install

npm run dev

Build a complete, polished, functional, production-ready Grocery Shop Billing and POS Software. Do not leave placeholder pages or non-functional buttons.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://smart-shelf-pos-48.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b3fdb303-a9d3-4a8c-bdfb-e06f0c7bb817).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
