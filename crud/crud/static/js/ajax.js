function delete_employee(id){
    jQuery.noConflict();
    $('#hidid').val(id);
    $('#deleteEmployeeModal').modal('show'); 
 }
function edit_employee(id){
    var tbl = document.getElementById('data_table');
    var cells1 = tbl.rows.item(id).cells;
    // alert(cells1.length);
    var name = cells1.item(1).innerHTML;
    var email = cells1.item(2).innerHTML;
    var address = cells1.item(3).innerHTML;
    var phone = cells1.item(4).innerHTML;
    
    $('#editname').val(name);
    $('#editemail').val(email);
    $('#editaddress').val(address);
    $('#editphone').val(phone);
    jQuery.noConflict();
    $('#editEmployeeModal').modal('show'); 
    
}

$(function(){
    $('#addid').click(function(){
        
    
        var nameJ= $('#nameid').val();
        var emaiilJ = $('#emailid').val();
        var addressJ = $('#addressid').val();
        var phoneJ = $('#phoneid').val();
        var warningJ = $('#warningid').val();
    
    
          
    
        $.ajaxSetup({
            headers: {
                "X-CSRFToken": $('[name=csrfmiddlewaretoken]').val()
            }
        })
        var urls= $('#urltag').data('url')
        
            $.ajax({
                url:urls,
                method:'POST',
                data: {
                    nameA:nameJ,
                    emailA:emaiilJ,
                    adressA:addressJ,
                    phoneA:phoneJ,
    
                },
                success: function(data){
                    
                    $('#warningid').text(data.message);
                    jQuery.noConflict();
                    $('#addEmployeeModal').modal('hide');
                    window.location.href=$('#urltag1').data('url');
    
    
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.error('Ajax request failed:', textStatus, errorThrown);
                }
    
            })
    })
$('#updateid').click(function(){
    //starts
    var nameJ= $('#editname').val();
    var emaiilJ = $('#editemail').val();
    var addressJ = $('#editaddress').val();
    var phoneJ = $('#editphone').val();
    


      

    $.ajaxSetup({
        headers: {
            "X-CSRFToken": $('[name=csrfmiddlewaretoken]').val()
        }
    })
    var urls= $('#urltag2').data('url')
    
        $.ajax({
            url:urls,
            method:'POST',
            data: {
                nameA:nameJ,
                emailA:emaiilJ,
                adressA:addressJ,
                phoneA:phoneJ,

            },
            success: function(data){
                
                $('#warningid').text(data.message);
                jQuery.noConflict();
                $('#editEmployeeModal').modal('hide');
                window.location.href=$('#urltag1').data('url');


            },
            error: function(xhr, textStatus, errorThrown) {
                console.error('Ajax request failed:', textStatus, errorThrown);
            }

        })

    //ends
});
})


$(function(){
    // alert('working');

    url_get=$('#getdataurl').data('url')
    $.ajax({
        url:url_get,
        method:'GET',
        success:function(data){
        
            // alert('this is working');
            j1 = JSON.parse(data.data)
            // alert(j1.length);
            // console.log(j1);
            st='';
            st+= "<thead><tr><th><span class='custom-checkbox'><input type='checkbox' id='selectAll'><label for='selectAll'></label></span></th><th>Name</th><th>Email</th><th>Address</th><th>Phone</th><th>Actions</th></tr></thead>"
            for(i=0,j=1;i<j1.length;i++,j++)
            {
                st += "<tr>";
                st +="<td>"+j+"</td>";
                st +="<td>"+j1[i].fields.nameM+"</td>";
                st +="<td>"+j1[i].fields.emailM+"</td>";
                st +="<td>"+j1[i].fields.addressM+"</td>";
                st +="<td>"+j1[i].fields.phoneM+"</td>";
                st +="<td><a id='btngreen' onclick='edit_employee("+j+");' class='edit' ><i class='material-icons' data-toggle='tooltip' title='Edit'>&#xE254;</i></a><a id='btnred'  class='delete' onclick='delete_employee("+j1[i].fields.phoneM+")' class='delete' ><i class='material-icons' ' title='Delete'>&#xE872;</i></a></td>";            
                st +="</tr>";
               
            }
            $('#data_table').html(st);


        }
    })


});

