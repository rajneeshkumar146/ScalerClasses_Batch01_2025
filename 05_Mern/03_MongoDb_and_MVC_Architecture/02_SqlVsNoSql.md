| Feature            | **SQL** (Relational DB)               | **NoSQL** (Non-relational DB)                    |
| ------------------ | ------------------------------------- | ------------------------------------------------ |
| **Data Model**     | Tables (rows & columns)               | Key-Value, Document, Column, Graph               |
| **Schema**         | Fixed schema (predefined structure)   | Dynamic schema (flexible, can change per record) |
| **Examples**       | MySQL, PostgreSQL, Oracle, SQL Server | MongoDB, Redis, Cassandra, DynamoDB              |
| **Query Language** | SQL (Structured Query Language)       | Varies: MongoDB uses JSON-based queries, etc.    |
| **Transactions**   | ACID-compliant (strong consistency)   | Often BASE model (eventual consistency)          |
| **Scalability**    | Vertical (scale-up: bigger server)    | Horizontal (scale-out: more servers)             |
| **Best For**       | Structured data with relationships    | Unstructured/semistructured data, fast iteration |
| **Joins**          | Supports complex joins                | Limited or no joins (denormalized data)          |
| **Performance**    | Predictable for complex queries       | High performance for large-scale, simple queries |


MongoDB Entity, Schema and Models

1. Entity
    a. An entity is like an object or a thing in the real world that
       has information we want to store. For example, if we are
       making a database for a school, student data can be an
       entity.
    b. For ecommerce website, products can be an entity, users,
       reviews can be different entities
    c. Different category of data

2. Schema
    a. A schema in MongoDB defines the structure of the data for
       an entity.
    b. In addition, It has certain rules and requirements that has to
       be followed like certain fields are required, data type
       constraints , etc
    c. To make it more clear user as a schema for Netflix will be
       very different than from say Amazon.

3. Model
    a. A model in MongoDB is a high-level programming interface
       that lets you interact with the data corresponding to a

       schema. It's like a tool to create, read, update, and delete
       entities in the database.
    b. It is an instance of a schema and represents a collection of
       documents in the database that adhere to the schema's
       structure.
    c. The model serves as the interface for interacting with the
       database, allowing you to perform CRUD (Create, Read,
       Update, Delete) operations and query the database.
