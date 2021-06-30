
function IncomeTax(income) {
    // rule 1 is applicable here
    if (income <= 400000) {
        document.getElementById("taxable_amount").innerHTML ='<label id ="aa" for="taxable_amount">INCOME TAX : ' +0+'</label>';
        return;
    }
    let taxable_amount = 0;

    if(income <= 300000){
        taxable_amount = (income - 150000) * 0.025;
    }
    else if (income <= 800000) {
        taxable_amount = (income - 300000) * 0.10 + 3750;
        // console.log(taxable_amount);
    } 
    else if (income <= 10000000){
        taxable_amount = (income - 800000) * 0.25 + 53750; 
    }
    else {
        taxable_amount = (income - 10000000) * 0.30 + 2353750;
    }
    // console.log(taxable_amount);
    document.getElementById("taxable_amount").innerHTML = '<label id ="aa" for="taxable_amount">INCOME TAX : '+taxable_amount+"</label>";
}


function GrossIncome(net_Income) {
    // rule 1 is applicable here
    if (net_Income <= 400000) {
      document.getElementById("calculated_gross").innerHTML = '<label id="aa" for="calculated_gross">GROSS INCOME : '+net_Income+"</label>";
      return;
    }
    let gross_Income = 0;
    
    gross_Income += 150000;
    net_Income -= 150000;
  
    gross_Income += 150000;
    net_Income -= 146250;
  
    if (net_Income <= 450000) {
        gross_Income += net_Income/0.9;
        document.getElementById("calculated_gross").innerHTML = '<label id="aa" for="calculated_gross">GROSS INCOME : '+Math.floor(gross_Income)+"</label>";
        return;
    } else {
        net_Income -= 450000;
        gross_Income += 500000;
    }
  
    if (net_Income <= 6900000) {
        gross_Income += net_Income/0.75;
        document.getElementById("calculated_gross").innerHTML = '<label id="aa" for="calculated_gross">GROSS INCOME : '+Math.floor(gross_Income)+"</label>";
        return;
    } else {
        net_Income -= 6900000;
        gross_Income += 92000000;
    }
  
    gross_Income += net_Income/0.7;
    document.getElementById("calculated_gross").innerHTML = '<label id="aa" for="calculated_gross">GROSS INCOME : '+Math.floor(gross_Income)+"</label>";
    return;
  }