-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `products` (
	`Id` int AUTO_INCREMENT NOT NULL,
	`Name` text NOT NULL,
	`Type` text NOT NULL,
	`create_dt` datetime,
	CONSTRAINT `products_Id` PRIMARY KEY(`Id`)
);
--> statement-breakpoint
CREATE TABLE `transaction` (
	`id` int AUTO_INCREMENT NOT NULL,
	`transaction_no` text,
	`transaction_type` text,
	`transfer_from_wallet` text,
	`transfer_to_wallet` text,
	`business_line_id_from` text,
	`business_line_id_to` text,
	`wallet_code_from` text,
	`wallet_code_to` text,
	`coin_name` text,
	`amount` decimal(10,0),
	`create_dt` datetime,
	CONSTRAINT `transaction_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`username` varchar(50) NOT NULL,
	`email` varchar(100) NOT NULL,
	`password` varchar(255) NOT NULL,
	`created_at` timestamp DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` timestamp DEFAULT (CURRENT_TIMESTAMP) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `email` UNIQUE(`email`),
	CONSTRAINT `username` UNIQUE(`username`)
);

*/