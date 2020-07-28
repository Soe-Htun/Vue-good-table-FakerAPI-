<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :pagination-options="{
        enabled: true, perPage:5
      }">
        <!-- <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field== 'name'">
            <span style="color:green">{{props.row.name}}</span>
          </span>
        </template>
        <template slot="table-row" slot-scope="props">
          <button class="btn" v-if="props.column.field=='score'">{{props.row.score}}</button>
        </template> -->
        <template slot="table-row" slot-scope="props">
           <span v-if="props.column.field== 'userImage'">
              <img :src="props.row.userImage">
           </span>
        </template>
      
    </vue-good-table>
    <!-- <edit/> -->
  </div>
</template>

<script>
const baseUrl ="http://localhost:3000/fakeAPI"
//import edit from './EditTable';
import axios from 'axios';
import faker from 'faker'
export default {
  name: 'my-component',
  // components:{
  //   edit
  // },
  data(){
    return {
      age:'',
      columns: [
        {
          label: faker.name.firstName(),
          field: 'firstname',
          type: 'text'
        },
        {
          label: 'LastName',
          field: 'lastname',
          type: 'text',
        },
        {
          label: 'City',
          field: 'city',
        },
         {
          label: 'Phone_no',
          field: 'phone_no',
        },
        {
          label: 'Email',
          field: 'email',
        },
        {
          label: 'CompanyName',
          field: 'companyName',
        },
        {
          label:'UserImage',
          field: 'userImage',
          
          html :true
          
        }
      ],
      rows: [
        // { id:1, name:"John", age: 20, createdAt: '2020-4-31',score: 0.03343 },
        // { id:2, name:"Jane", age: 24, createdAt: '2020-5-31', score: 0.03343 },
        // { id:3, name:"Susan", age: 16, createdAt: '2020-6-30', score: 0.03343 },
        // { id:4, name:"Chris", age: 55, createdAt: '2020-6-11', score: 0.03343 },
        // { id:5, name:"Dan", age: 40, createdAt: '2020-7-21', score: 0.03343 },
        // { id:6, name:"John", age: 20, createdAt: '2020-4-31', score: 0.03343 },
      ],
      userImage:[]
    };
  },
  methods:{
    getData(){
      axios.get(baseUrl).then(res =>{
        for(var i=0; i< res.data.length; i++){
          this.rows.push({
            firstname: res.data[i].FirstName,
            lastname :res.data[i].LastName,
            city :res.data[i].City,
            phone_no:res.data[i].Phone_no,
            email:res.data[i].Email,
            companyName:res.data[i].CompanyName,
            userImage: res.data[i].UserImage
          })
          console.log(res.data);
          let userImage= res.data[i].UserImage
          console.log(userImage);
        }
      })
      
    },
  },
  created(){
    this.getData();
  }
};
</script>

<style scoped>
.el-input{
  border-color: red;
  background: none;
  outline-color: green;
}
.btn{
  background-color: #409EFF;
  color: white;
  border: none;
  width: 100px;
  height: 36px;
}
</style>