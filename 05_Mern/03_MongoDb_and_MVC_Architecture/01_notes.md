## Command you need to setup:
1. npm init -y && npm i express && npm i mongoose.

## Steps to setup MongoDB 
1. Sin-in/up : https://www.mongodb.com/products/platform/atlas-database
2. Create your new project: <Name of your project>
3. Create cluster
    3.1 choose free one.
    3.2 Choose AWS as provider.
    3.3 Choose region <In my case it is mumbai>
    3.4 Click on create cluster.
4. After creating cluster don't forget to copy URL from VS code Integration which include userName and Password.
5. Under security section:
   4.1 Network access
   4.2 Add IP address: <Your IP address>
        4.2.1 Choose <allow access from any where>
6. Click on Clusters to see your data. 


##  Reference: 
1. https://mongoosejs.com/docs/schematypes.html