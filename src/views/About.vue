<template>
  <div class="about">
    <MTable 
     :table-data="tableData"
      :page-data="pageData"
      border="true"
    >
    
    </MTable>
  </div>
</template>

<script>
export default {
  name:'About',
  data() {
    return {
      tableData:{
        titles:[
          {
            type:'index',
            label:'Id',
          },
          {
            columnType:'nomal',
            prop:'name',
            label:'Name',
            align: 'center',
          },
           {
            columnType:'img',
            prop:'image',
            label:'Image',
            align: 'center',
          },
           {
            columnType:'input',
            prop:'input',
            label:'Name',
            align: 'center',
          }

        ],
        datas:[
          {
            id:1,
            name:'Marco',
            image:'https://c8.alamy.com/comp/R7KEMJ/spain-la-liga-santander-2018-2019-real-madrid-cf-marco-asensio-willemsen-asensio-R7KEMJ.jpg',
            input:'Football'
          }
        ]
        
      }
    }
  },
}
</script>
