How to Deploy an App to Netlify from a GitHub Repository
This is my favorite way of deploying applications on Netlify.

Because whenever you push any changes to the GitHub repository, it will automatically be deployed to Netlify. You can also see all deployed versions and easily roll back to any previously working version of code with just a single click.

If you already have a repository pushed to GitHub, then you just need to connect it.

Login to your Netlify account. In the dashboard, click on the New site from Git button.

netlify_home

Click on the GitHub button to connect your GitHub repository.

git_provider

It will open a new tab. Make sure the popup is enabled in your browser.

select_repository

Search for the GitHub repository in the Search repos search box. If your repository is not getting displayed then click on the Configure the Netlify app on GitHub button at the bottom of the page.

configure_netlify

Once clicked, scroll down on the page and click on the Select repositories dropdown and search for your repository and click on the Save button.

select_repo

You will be redirected to the previous page showing all the available repositories.

Search for the repository you want to deploy. For this article, I have selected the react-book-management-app repository which we created in my previous article.

find_repository-1

Once you select the repository, you will see the following screen:

deploy_repository

For this application, we don't need to change anything.

Your Build command and Publish directory will be automatically populated. Make sure to enter these fields if you have a different command in package.json to build your app or those fields are not auto-populated.

Now, click on the Deploy site button. Once clicked, you will see the Site deploy in progress message.

deploying

You'll have to wait a little bit while it's deploying. Once deployment is completed, you will see the following screen:

deployed

Open the link in the new tab and you will see your application deployed live.

deployed_app

Awesome! Now, if you make any changes in the source code and push that change to GitHub, Netlify will detect that change and re-deploy your application with your latest changes.

If you check the application, you will see that the application works just fine with the navigation and you're able to add/edit/delete a book.

working_app

But there is one issue. If you directly access the /add route or refresh the /add route page, you will get a page not found error as shown below:

page_not_found

You will get the same error if you try to refresh the edit page route.

This is because when we access any route on our local machine, React Router handles the routing. But when we deploy the application on any server, directly accessing the route will send the request to the server itself (Netlify in our case).

But as there is no /add route handler on the server-side, you will see a page not found error. But Netlify provides a way to fix this.

Create a new file with the name _redirects inside the public folder of our project and add the following contents inside it:

/* /index.html 200
Here, we're telling Netlify to redirect all the routes to the index.html file.

The index.html file contains our entire React app code. It gets generated inside the build folder when the yarn build command is executed by Netlify while deploying the app.

And as routing is handled by our React app which is contained in the index.html file, our application will work without a page not found issue.

Now, push the changes to the GitHub repository so Netlify will deploy the app again with these changes.

And once deployed, if you check the deployed application, you will see that the application works fine and we don't get a page not found error.

no_page_not_found

That's it! We're all done with deploying our application to Netlify.

How to Easily Change a Site Name in Netlify
If you check the name of the deployed site you will see that it's not easy to remember, especially if you have lot of applications deployed. But Netlify provides a way to easily change that.

Click on the Site settings button displayed on the Site overview section.

site_settings

Then click on the Change site name button and enter a new name. Click on the Save button, and now you can access your application with the changed name.

changed_site_name

I usually like to give the same name as the repository name so it's easy to find a particular application if you have a lot of deployed applications on Netlify.