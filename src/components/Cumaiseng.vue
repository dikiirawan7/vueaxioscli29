<template>

    <div>
        
        <h1>Posts</h1>
            <div class="row">
                <div class="col-md-10"></div>
                <div class="col-md-2">
                    <router-link :to="{name:'create'}" class="btn btn-primary">Create Post</router-link>
                </div>
            </div>
            <br/>
            <h2>Jumlah: {{posts.length}}</h2>

            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Deskripsi</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody v-for="(post,oke) in posts" :key="post.id" >
                    
                    <tr >
                        <td v-on:click="gb(oke) ">{{oke+1}}</td>
                        <td v-on:click="gb(oke) ">{{post.title}}</td>
                        <td v-on:click="gb(oke) ">{{post.body}}</td>
                        <td><router-link :to="{name:'edit',params:{id:post.id}}" class="btn btn-primary">Edit</router-link>
                        <button @click.prevent="deletePost(post.id,oke)" class="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr v-show="post.tampil">
                        <td colspan="4">
                            <div >
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-md-12">
                                            <div class="card card-default">
                                                <div class="card-header">{{post.title}}</div>

                                                <div class="card-body">
                                                    {{post.body}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    
                </tbody>
                
            </table>
    </div>
</template>
<script>

export default {
    
    
    name:'Iseng',
    data(){
        return{
        posts:[],
        }
    },
    methods:{
      
    },
    created(){
            
            let uri="/api/posts";
            
            this.axios.get(uri).then(response=>{
                console.log(response.data.data);
                this.posts = response.data.data;
                
            });

           
        }

}
</script>

