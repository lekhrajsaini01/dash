document.getElementById('add_rules').addEventListener('click',Add_Rules)
function Add_Rules()
{
    // e.preventDefault();
    console.log("hello world")
    rule_id = document.getElementById('rule_id').value;
    rule_name = document.getElementById('rule_name').value;
    rule_type = document.getElementById('rule_type').value;
    rule_group = document.getElementById('rule_group').value;
    rank = document.getElementById('rank').value;
    applied_on = document.getElementById('applied_on').value;
    expires_on = document.getElementById('expires_on').value;
    rule_description = document.getElementById('rule_description').value;
    
    
    rulesArray = []

    Rule = {
        "RuleId" : rule_id,
        "Name" : rule_name,
        "Type" : rule_type,
        "Group" : rule_group,
        "Rank" : rank,
        "AppliedDate" : applied_on,
        "ExpiresDate" : expires_on,
        "Description" : rule_description
    }

    function init(){
        if(localStorage.Rules){
            rulesArray = JSON.parse(localStorage.Rules);
            for(let i=0;i<Rules.length;i++){
                prepareTableCell(rulesArray[i].RuleId,rulesArray[i].Name)
            }
        }
    }


    if(rule_id && rule_name && rule_type && rule_group && rank && applied_on && expires_on && rule_description){
        const items = (()=>{
            const fieldValue = localStorage.getItem('Rules')
            return fieldValue === null ? [] : JSON.parse(fieldValue)
        })();
        items.push(Rule);
        localStorage.setItem('Rules',JSON.stringify(items))
        location.reload();
    }else{
        document.getElementById('show').innerHTML = "All Fields are Mandatory"
    }
}