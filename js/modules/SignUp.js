export default {

    template: `
    <section class="signUp">
                <form id="my-form">
                <label for="name">Enter Your Name:</label>
                <input v-model="user" type="text" name="username" required placeholder="username">
                <label for="password">Password: </label>
                <input v-model="password" type="password" name="password" required placeholder="password">
                <input type="submit" value="Sign UP">
                
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
            console.log('hit the API pan is asking for');

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