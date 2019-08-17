var myVar;
function preloader() {
  myVar = setTimeout(showPage, 5000);
  document.getElementById('content').style.display="none";
}
function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("content").style.transition = "all 0.9s ease";
  document.getElementById("content").style.display = "block";
}

document.getElementById('loan-form').addEventListener('submit',function(e)
{
e.preventDefault();
let loan=document.querySelector('#loan-amount');
let interest_percent=document.querySelector('#interest');
let years=document.querySelector('#repay-years');
let monthlyPayment=document.querySelector('#monthly-payment');
let totalAmount=document.querySelector('#total-payment');
let totalInterest=document.querySelector('#total-interest');
let result=document.querySelector('#result');
let interest;
let monthly_amt;
let total_amount;
interest=((parseFloat(loan.value)*parseFloat(interest_percent.value)*parseFloat(years.value))/100).toFixed(2);
totalInterest.value=interest;
total_amount=(parseFloat(loan.value)+parseFloat(interest)).toFixed(2);
totalAmount.value=total_amount;
monthly_amt=parseFloat(((total_amount)/(years.value*12)).toFixed(2));
monthlyPayment.value=monthly_amt;
// Set loader
loading();
})
function loading()
{
  document.getElementById('loading').style.display="block";
  document.getElementById('result').style.display="none";
  setTimeout(showResult,3500);
}
function showResult(){
  document.getElementById('result').style.display="block";
  document.getElementById('loading').style.display="none";
}

