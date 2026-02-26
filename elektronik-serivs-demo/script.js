function checkStatus() {
    const phoneInput = document.getElementById('phone-input').value;
    const resultDiv = document.getElementById('tracking-result');
    
    // Simple mockup logic for demo purposes
    if (phoneInput.length >= 10) {
        resultDiv.innerHTML = `<strong>${phoneInput}</strong> numaralı cihazınızın onarımı tamamlanmıştır. Teslim alabilirsiniz.`;
        resultDiv.style.backgroundColor = '#d4edda';
        resultDiv.style.color = '#155724';
        resultDiv.style.border = '1px solid #c3e6cb';
    } else {
        resultDiv.innerHTML = `Lütfen geçerli bir telefon numarası giriniz.`;
        resultDiv.style.backgroundColor = '#f8d7da';
        resultDiv.style.color = '#721c24';
        resultDiv.style.border = '1px solid #f5c6cb';
    }
    
    resultDiv.classList.remove('hidden');
}
