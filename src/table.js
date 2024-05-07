import React from "react";
import  "./table.css";

class Table extends  React.Component{

   render(){

      return <>

      <div className="container">

      <h1>Student Dasborad</h1>
      <button className="add-btn">New Add</button>

   <table>
<thead>
   <tr>
      <th>Name</th>
      <th>Dept</th>
     <th>Status</th>
     <th>Fees</th>
     <th>Action</th>
   </tr>
</thead>

<tbody>
   <tr>
<td>John</td>
<td>IT</td>
<td>P</td>
<td>20000</td>
<td>
   <button>Edit</button>
   <button>Delete</button>
</td>
</tr>



<tr>
<td>John</td>
<td>IT</td>
<td>P</td>
<td>20000</td>
<td>
   <button>Edit</button>
   <button>Delete</button>
</td>
</tr>

</tbody>





   </table>


      </div>
      
     


      
      </>

   }
}

export default Table;