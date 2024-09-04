import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, text, datetime, decimal, unique, varchar, timestamp } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const products = mysqlTable("products", {
	id: int("Id").autoincrement().notNull(),
	name: text("Name").notNull(),
	type: text("Type").notNull(),
	createDt: datetime("create_dt", { mode: 'string'}),
},
(table) => {
	return {
		productsId: primaryKey({ columns: [table.id], name: "products_Id"}),
	}
});

export const transaction = mysqlTable("transaction", {
	id: int("id").autoincrement().notNull(),
	transactionNo: text("transaction_no"),
	transactionType: text("transaction_type"),
	transferFromWallet: text("transfer_from_wallet"),
	transferToWallet: text("transfer_to_wallet"),
	businessLineIdFrom: text("business_line_id_from"),
	businessLineIdTo: text("business_line_id_to"),
	walletCodeFrom: text("wallet_code_from"),
	walletCodeTo: text("wallet_code_to"),
	coinName: text("coin_name"),
	amount: decimal("amount", { precision: 10, scale: 0 }),
	createDt: datetime("create_dt", { mode: 'string'}),
},
(table) => {
	return {
		transactionId: primaryKey({ columns: [table.id], name: "transaction_id"}),
	}
});

export const users = mysqlTable("users", {
	id: int("id").autoincrement().notNull(),
	username: varchar("username", { length: 50 }).notNull(),
	email: varchar("email", { length: 100 }).notNull(),
	password: varchar("password", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().onUpdateNow(),
},
(table) => {
	return {
		usersId: primaryKey({ columns: [table.id], name: "users_id"}),
		email: unique("email").on(table.email),
		username: unique("username").on(table.username),
	}
});