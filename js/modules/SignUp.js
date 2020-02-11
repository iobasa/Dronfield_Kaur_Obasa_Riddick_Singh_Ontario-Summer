export default {

    template: `
    <section class="signUp">
                <form id="my-form">
                <label for="name">Enter Your Name:</label>
                <input v-model="user" type="text" name="username" required placeholder="username">
                <label for="password">Password: </label>
                <input v-model="password" type="password" name="password" required placeholder="password">

                <a href="localhost/admin/admin_login.php"><input type="submit" value="Sign UP"></a>
                
                </form>   
                </section>
    `,


    

    data: function(){
        return{
           user:"",
           password:""
        }
    },


    methods:{
        submitUserData(){

            //do the fetch here using the post method
            //refer to the node mailer example from the last semester
            //how to get data from a for, into the fetch call using post

            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type': 'application/json'
                },
        
                body: JSON.stringify(maildata)
            })
                .then(res => res.json())
                .then(data => {
                    // remove this when testing is done and everything is working
                    console.log(data);
        
                    if (data.response.includes("OK")) {
                        // we successfully sent an email via gmail and nodemailer!
                        // flash success here, reset the form
                        form.reset();
                        // alert("email was sent!"); // DO NOT use alerts. they are so hacky and gross.
                    }
                }) // this will be a success or fail message from the server
                .catch((err) => console.log(err));
        
            console.log('hit the API that Pan wanted');
        

            //reset the form on the page
            document.querySelector('form').reset();
            //reset the username and password on the page
            this.user ="";
            this.password="";

        }
    },

    created: function(){
        console.log('our app components rendered');

    
    }
    
}