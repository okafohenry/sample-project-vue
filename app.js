const app = Vue.createApp({
    data(){
        return{ 
            firstname: 'Henry',
            lastname: 'okafor',
            email: 'okafohenrie@gmail.com',
            gender: "male",
            picture: "https://randomuser.me/api/portraits/men/75.jpg"
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api');
            const { results} = await res.json();

            this.firstname = results[0].name.first;
            this.lastname = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
        }
    }
})

app.mount("#app");