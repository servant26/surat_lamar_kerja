// Get current date with city
function getCurrentDateWithCity() {
    const now = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('id-ID', options);
    const city = document.getElementById('city').value.trim() || "Samarinda";
    return `${city}, ${formattedDate}`;
}

// Format date for PDF
function getFormattedDate() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    return `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
}

// Get form values
function getFormValues() {
    return {
        company: document.getElementById('company').value.trim(),
        position: document.getElementById('position').value.trim(),
        address: document.getElementById('address').value.trim(),
        source: document.getElementById('source').value,
        city: document.getElementById('city').value.trim() || "Samarinda",
        name: document.getElementById('name').value.trim() || "Ali Khatami",
        ttl: document.getElementById('ttl').value.trim() || "Tanah Grogot, 26 April 2003",
        education: document.getElementById('education').value.trim() || "S1 Universitas Mulawarman",
        phone: document.getElementById('phone').value.trim() || "083813414319",
        homeAddress: document.getElementById('homeAddress').value.trim() || "Jl. Trisari Gg. Sinarsari RT 19"
    };
}

// Array untuk melacak urutan pencentangan
let attachmentOrder = [];

// Get checked attachments in order of checking
function getCheckedAttachments() {
    const attachments = [];
    
    if (attachmentOrder.length === 0) {
        return attachments;
    }
    
    attachmentOrder.forEach(checkboxId => {
        const checkbox = document.getElementById(checkboxId);
        if (checkbox && checkbox.checked) {
            attachments.push(checkbox.value);
        }
    });
    
    return attachments;
}

// Generate letter based on form inputs
function generateLetter() {
    const formValues = getFormValues();
    const attachments = getCheckedAttachments();
    
    const { company, source, position, address, city, name, ttl, education, phone, homeAddress } = formValues;
    
    let letterHTML = '';
    
    if (!company && !position && !name) {
        letterHTML = '<p class="letter-instruction">Mulai mengisi formulir untuk melihat pratinjau surat lamaran kerja Anda.</p>';
    } else {
        letterHTML = `
            <div class="letter-header">
                <div class="letter-perihal">
                    <p>Perihal : Lamaran Pekerjaan</p>
        `;
        
        if (attachments.length > 0) {
            letterHTML += `<p>Lampiran : ${attachments.length} Lembar</p>`;
        }
        
        letterHTML += `
                </div>
                <div class="letter-date">
                    <p>${getCurrentDateWithCity()}</p>
                </div>
            </div>
            
            <div class="recipient">
                <p>Kepada Yth.</p>
        `;
        
        if (company) {
            letterHTML += `<p>Bapak/Ibu Pimpinan ${company}</p>`;
        } else {
            letterHTML += `<p>Bapak/Ibu Pimpinan</p>`;
        }
        
        letterHTML += `
                <p>Di</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;${address || "Alamat"}</p>
            </div>
            
            <div class="salutation">
                <p>Dengan hormat,</p>
            </div>
            
            <div class="letter-body">
        `;
        
        if (company) {
            if (position) {
                letterHTML += `<p>Berdasarkan informasi yang saya dapatkan melalui ${source}, saya mendapati bahwa ${company} sedang membutuhkan karyawan untuk mengisi posisi sebagai <span class="bold">${position}</span>. Berikut ini adalah data pribadi saya:</p>`;
            } else {
                letterHTML += `<p>Berdasarkan informasi yang saya dapatkan melalui ${source}, saya mendapati bahwa ${company} sedang membuka lowongan kerja. Berikut ini adalah data pribadi saya:</p>`;
            }
        } else {
            if (position) {
                letterHTML += `<p>Berdasarkan informasi yang saya dapatkan melalui ${source}, saya mendapati bahwa perusahaan Anda sedang membutuhkan karyawan untuk mengisi posisi sebagai <span class="bold">${position}</span>. Berikut ini adalah data pribadi saya:</p>`;
            } else {
                letterHTML += `<p>Berdasarkan informasi yang saya dapatkan melalui ${source}, saya mendapati bahwa perusahaan Anda sedang membuka lowongan kerja. Berikut ini adalah data pribadi saya:</p>`;
            }
        }
        
        letterHTML += `
            </div>
            
            <div class="data-pribadi">
                <table class="data-table">
                    <tr>
                        <td>1. Nama Lengkap</td>
                        <td>: ${name}</td>
                    </tr>
                    <tr>
                        <td>2. Tempat, Tanggal Lahir</td>
                        <td>: ${ttl}</td>
                    </tr>
                    <tr>
                        <td>3. Pendidikan Terakhir</td>
                        <td>: ${education}</td>
                    </tr>
                    <tr>
                        <td>4. No. Telepon</td>
                        <td>: ${phone}</td>
                    </tr>
                    <tr>
                        <td>5. Alamat</td>
                        <td>: ${homeAddress}</td>
                    </tr>
                </table>
            </div>
            
            <div class="letter-body">
        `;
        
        if (attachments.length > 0) {
            if (position) {
                letterHTML += `<p>Dengan ini mengajukan permohonan kerja untuk menempati posisi sebagai <span class="bold">${position}</span> pada bisnis/usaha yang Bapak/Ibu pimpin, sebagai bahan pertimbangan berikut saya lampirkan berkas-berkas pendukung:</p>`;
            } else {
                letterHTML += `<p>Dengan ini mengajukan permohonan kerja pada bisnis/usaha yang Bapak/Ibu pimpin, sebagai bahan pertimbangan berikut saya lampirkan berkas-berkas pendukung:</p>`;
            }
            
            letterHTML += `<ol class="attachment-list">`;
            
            attachments.forEach(item => {
                letterHTML += `<li>${item}</li>`;
            });
            
            letterHTML += `</ol>`;
        }
        
        letterHTML += `
                <p>Demikian surat lamaran ini saya ajukan sebagai bahan pertimbangan. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.</p>
            </div>
            
            <div class="signature">
                <p>Hormat saya,</p>
                <br><br><br>
                <p>${name}</p>
            </div>
        `;
    }
    
    document.getElementById('letterPreview').innerHTML = letterHTML;
    generateEmailBody();
}

// Generate email body
function generateEmailBody() {
    const formValues = getFormValues();
    const attachments = getCheckedAttachments();
    
    const { company, position, name, education } = formValues;
    
    let emailText = '';
    
    if (!company && !position && !name) {
        emailText = "Mulai mengisi formulir untuk melihat teks body email yang bisa Anda gunakan saat mengirim lamaran via email.";
    } else {
        emailText = `Kepada Yth.\n`;
        
        if (company) {
            emailText += `Bapak/Ibu Pimpinan ${company}\n\n`;
        } else {
            emailText += `Bapak/Ibu Pimpinan\n\n`;
        }
        
        emailText += `Dengan hormat,\n\n`;
        
        let introText = `Perkenalkan, saya ${name}, lulusan ${education}. Saya memiliki minat dan kemampuan di bidang teknologi digital khususnya programming, design, dan editing video. Bapak/Ibu dapat mengakses Portofolio saya pada link yang tertera (https://myporto-ten-sepia.vercel.app). Meskipun latar belakang saya berfokus pada bidang digital, saya terbiasa beradaptasi dan cepat mempelajari hal baru. `;
        
        if (position) {
            introText += `Melalui email ini, saya mengajukan lamaran kerja untuk posisi ${position} pada bisnis/usaha yang Bapak/Ibu pimpin.`;
        } else {
            introText += `Melalui email ini, saya mengajukan lamaran kerja pada bisnis/usaha yang Bapak/Ibu pimpin.`;
        }
        
        emailText += introText;
        
        if (attachments.length > 0) {
            emailText += `\n\nSebagai bahan pertimbangan, saya juga melampirkan beberapa berkas tambahan seperti:\n`;
            
            attachments.forEach((item, index) => {
                emailText += `${index + 1}. ${item}\n`;
            });
            
            emailText += `\nDemikian lamaran ini saya ajukan, atas perhatiannya saya ucapkan terimakasih.\n\n`;
        } else {
            emailText += `\n\nDemikian lamaran ini saya ajukan, atas perhatiannya saya ucapkan terimakasih.\n\n`;
        }
        
        emailText += `Hormat saya,\n`;
        emailText += `${name}`;
    }
    
    document.getElementById('emailBody').textContent = emailText;
}

// Copy email body to clipboard
function copyEmailBody() {
    const emailText = document.getElementById('emailBody').textContent;
    
    const textarea = document.createElement('textarea');
    textarea.value = emailText;
    document.body.appendChild(textarea);
    
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            const copyBtn = document.getElementById('copyEmailBtn');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Teks Disalin!';
            copyBtn.style.backgroundColor = '#2ecc71';
            
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.backgroundColor = '#3498db';
            }, 2000);
        }
    } catch (err) {
        console.error('Gagal menyalin teks: ', err);
        alert('Gagal menyalin teks ke clipboard');
    }
    
    document.body.removeChild(textarea);
}

// Download as PDF - FIX: POSISI TANGGAL DAN TTD TIDAK MEPET
function downloadPDF() {
    const letterPreview = document.getElementById('letterPreview');
    if (letterPreview.querySelector('.letter-instruction')) {
        alert("Harap isi minimal nama lengkap sebelum mengunduh PDF");
        return;
    }
    
    const formValues = getFormValues();
    const attachments = getCheckedAttachments();
    
    const { company, source, position, address, city, name, ttl, education, phone, homeAddress } = formValues;
    const positionText = position || "Lamaran";
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // MARGIN: Kiri kecil, Kanan NORMAL (tidak terlalu kecil)
    const marginLeft = 20;
    const marginRight = 15; // NORMAL, tidak terlalu mepet
    const marginTop = 20;
    let yPos = marginTop;
    
    doc.setFont("times");
    doc.setFontSize(12);
    
    const currentDateWithCity = getCurrentDateWithCity();
    const formattedDate = getFormattedDate();
    
    function checkNewPage(additionalHeight) {
        if (yPos + additionalHeight > 280) {
            doc.addPage();
            yPos = marginTop;
            return true;
        }
        return false;
    }
    
    doc.setFontSize(12);
    doc.setFont("times", "normal");
    
    // Perihal di kiri
    doc.text("Perihal : Lamaran Pekerjaan", marginLeft, yPos);
    
    // Lampiran di bawah Perihal jika ada berkas
    if (attachments.length > 0) {
        doc.text(`Lampiran : ${attachments.length} Lembar`, marginLeft, yPos + 6);
    }
    
    // Tanggal di kanan - TIDAK MEPET, dikasih space
    const dateX = 210 - marginRight - 0; // 20px dari margin kanan
    doc.text(currentDateWithCity, dateX, yPos, { align: "right" });
    
    // Spasi
    if (attachments.length > 0) {
        yPos += 18;
    } else {
        yPos += 12;
    }
    
    doc.text("Kepada Yth.", marginLeft, yPos);
    yPos += 6;
    
    if (company) {
        doc.text(`Bapak/Ibu Pimpinan ${company}`, marginLeft, yPos);
    } else {
        doc.text("Bapak/Ibu Pimpinan", marginLeft, yPos);
    }
    yPos += 6;
    
    doc.text("Di", marginLeft, yPos);
    yPos += 6;
    
    doc.text(`    ${address || "Alamat"}`, marginLeft, yPos);
    yPos += 12;
    
    doc.text("Dengan hormat,", marginLeft, yPos);
    yPos += 10;
    
    // Text opening - Lebar normal
    const textWidth = 210 - marginLeft - marginRight; // Lebar wajar
    
    let openingText = "";
    
    if (company) {
        if (position) {
            openingText = `Berdasarkan informasi yang saya dapatkan melalui ${source}, saya mendapati bahwa ${company} sedang membutuhkan karyawan untuk mengisi posisi sebagai ${position}. Berikut ini adalah data pribadi saya:`;
        } else {
            openingText = `Berdasarkan informasi yang saya dapatkan melalui ${source}, saya mendapati bahwa ${company} sedang membuka lowongan kerja. Berikut ini adalah data pribadi saya:`;
        }
    } else {
        if (position) {
            openingText = `Berdasarkan informasi yang saya dapatkan melalui ${source}, saya mendapati bahwa perusahaan Anda sedang membutuhkan karyawan untuk mengisi posisi sebagai ${position}. Berikut ini adalah data pribadi saya:`;
        } else {
            openingText = `Berdasarkan informasi yang saya dapatkan melalui ${source}, saya mendapati bahwa perusahaan Anda sedang membuka lowongan kerja. Berikut ini adalah data pribadi saya:`;
        }
    }
    
    const splitText = doc.splitTextToSize(openingText, textWidth);
    splitText.forEach(line => {
        checkNewPage(6);
        doc.text(line, marginLeft, yPos);
        yPos += 6;
    });
    
    yPos += 6;
    
    checkNewPage(30);
    const labelWidth = 60;
    
    doc.text("1. Nama Lengkap", marginLeft, yPos);
    doc.text(`: ${name}`, marginLeft + labelWidth, yPos);
    yPos += 7;
    
    doc.text("2. Tempat, Tanggal Lahir", marginLeft, yPos);
    doc.text(`: ${ttl}`, marginLeft + labelWidth, yPos);
    yPos += 7;
    
    doc.text("3. Pendidikan Terakhir", marginLeft, yPos);
    doc.text(`: ${education}`, marginLeft + labelWidth, yPos);
    yPos += 7;
    
    doc.text("4. No. Telepon", marginLeft, yPos);
    doc.text(`: ${phone}`, marginLeft + labelWidth, yPos);
    yPos += 7;
    
    doc.text("5. Alamat", marginLeft, yPos);
    doc.text(`: ${homeAddress}`, marginLeft + labelWidth, yPos);
    yPos += 12;
    
    if (attachments.length > 0) {
        checkNewPage(18);
        
        let lampiranText = "";
        if (position) {
            lampiranText = `Dengan ini mengajukan permohonan kerja untuk menempati posisi sebagai ${position} pada bisnis/usaha yang Bapak/Ibu pimpin, sebagai bahan pertimbangan berikut saya lampirkan berkas-berkas pendukung:`;
        } else {
            lampiranText = `Dengan ini mengajukan permohonan kerja pada bisnis/usaha yang Bapak/Ibu pimpin, sebagai bahan pertimbangan berikut saya lampirkan berkas-berkas pendukung:`;
        }
        
        const splitLampiranText = doc.splitTextToSize(lampiranText, textWidth);
        splitLampiranText.forEach(line => {
            checkNewPage(6);
            doc.text(line, marginLeft, yPos);
            yPos += 6;
        });
        
        yPos += 4;
        
        attachments.forEach((item, index) => {
            checkNewPage(7);
            doc.text(`${index + 1}. ${item}`, marginLeft, yPos);
            yPos += 7;
        });
        
        yPos += 6;
    }
    
    checkNewPage(18);
    const closingText = "Demikian surat lamaran ini saya ajukan sebagai bahan pertimbangan. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.";
    
    const splitClosingText = doc.splitTextToSize(closingText, textWidth);
    splitClosingText.forEach(line => {
        checkNewPage(6);
        doc.text(line, marginLeft, yPos);
        yPos += 6;
    });
    
    yPos += 30;
    checkNewPage(35);
    
    // TTD di kanan - TIDAK MEPET, posisi di tengah kanan
    const ttdX = 170; // Posisi X untuk TTD (lebih ke kanan tapi tidak mepet)
    doc.text("Hormat saya,", ttdX, yPos);
    doc.text(name, ttdX, yPos + 25);
    
    const filename = `Surat_Lamaran_${positionText.replace(/\s+/g, '_')}_${formattedDate}.pdf`;
    doc.save(filename);
}

// Reset form
function resetForm() {
    document.getElementById('company').value = '';
    document.getElementById('position').value = '';
    document.getElementById('address').value = '';
    document.getElementById('source').value = 'Instagram';
    document.getElementById('city').value = 'Samarinda';
    document.getElementById('name').value = 'Ali Khatami';
    document.getElementById('ttl').value = 'Tanah Grogot, 26 April 2003';
    document.getElementById('education').value = 'S1 Universitas Mulawarman';
    document.getElementById('phone').value = '083813414319';
    document.getElementById('homeAddress').value = 'Jl. Trisari Gg. Sinarsari RT 19';
    
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    attachmentOrder = [];
    
    document.getElementById('letterPreview').innerHTML = 
        '<p class="letter-instruction">Mulai mengisi formulir untuk melihat pratinjau surat lamaran kerja Anda.</p>';
    
    document.getElementById('emailBody').textContent = "Mulai mengisi formulir untuk melihat teks body email yang bisa Anda gunakan saat mengirim lamaran via email.";
}

// Add event listeners for live update
function setupLiveUpdate() {
    const desktopElements = [
        'company', 'position', 'address', 'source', 'city', 'name', 'ttl', 'education', 'phone', 'homeAddress'
    ];
    
    desktopElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', generateLetter);
            element.addEventListener('change', generateLetter);
        }
    });
    
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                if (!attachmentOrder.includes(this.id)) {
                    attachmentOrder.push(this.id);
                }
            } else {
                const index = attachmentOrder.indexOf(this.id);
                if (index > -1) {
                    attachmentOrder.splice(index, 1);
                }
            }
            
            generateLetter();
        });
    });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    setupLiveUpdate();
    
    document.getElementById('downloadBtn').addEventListener('click', downloadPDF);
    document.getElementById('resetBtn').addEventListener('click', resetForm);
    document.getElementById('copyEmailBtn').addEventListener('click', copyEmailBody);
    
    generateLetter();
    
    let typingTimer;
    const doneTypingInterval = 300;
    
    const textInputs = document.querySelectorAll('input[type="text"], input[type="tel"]');
    textInputs.forEach(input => {
        input.addEventListener('input', () => {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(generateLetter, doneTypingInterval);
        });
        
        input.addEventListener('keydown', () => {
            clearTimeout(typingTimer);
        });
    });
});