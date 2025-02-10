document.getElementById('make-payment').addEventListener('click', (event) => {
    event.preventDefault(); // Prevents default behavior (form submission or link click)
    console.log('Processing payment...');
  
    // Simulate payment process
    setTimeout(() => {
        console.log('Payment successful');
        showNotification('Payment Successful!');
    }, 2000);
});
