// Data master untuk autocomplete
const MASTER_POSITIONS = [
    "Admin", "Admin Data", "Admin Gudang", "Admin HR", "Admin Kantor", "Admin Logistik", "Admin Marketing",
    "Admin Online Shop", "Admin Operational", "Admin Pajak (basic)", "Admin Produksi", "Admin Project",
    "Admin Purchasing", "Admin Sales", "Admin Sosial Media", "Admin Warehouse", "Asisten Administrasi",
    "Asisten Gudang", "Asisten Produksi", "Asisten Pribadi (non-executive)", "Asisten Supervisor",
    "Asisten Toko", "Bakery Staff", "Banquet Staff", "Barista", "Bellboy", "Booth Crew", "Brand Promotor",
    "Building Staff", "Buruh Gudang", "Buruh Pabrik", "Call Center", "Cashier Supervisor (junior)",
    "Checker Gudang", "Cleaning Service", "Collection Staff", "Content Admin", "Cook Helper", "Counter Staff",
    "Crew Outlet", "Customer Service", "Customer Support", "CS Online", "CS Marketplace", "Data Admin",
    "Data Entry", "Delivery Driver", "Digital Admin", "Dispatcher", "Driver", "Driver Kurir", "Driver Logistik",
    "Driver Operasional", "Driver Truk (ringan)", "Editor Video (basic)", "Electrical Helper", "Engineering Helper",
    "Entry Data Staff", "Estimator Admin", "Event Crew", "Finance Admin", "Floor Staff", "Food & Beverage Crew",
    "Fotokopi Staff", "Front Office", "Frontliner", "GA Admin", "GA Staff", "Gate Keeper", "General Admin",
    "General Affair Staff", "Grocery Staff", "Gudang Staff", "Helper", "Host Live (Olshop)", "Housekeeping",
    "HR Admin", "HR Staff (junior)", "Instalasi Helper", "Inspector Helper", "Inventory Staff", "IT Support (basic)",
    "Junior Admin", "Junior Finance", "Junior Marketing", "Junior Operator", "Junior Staff", "Junior Warehouse Staff",
    "Kasir", "Kasir Online", "Karyawan Produksi", "Karyawan Toko", "Kitchen Crew", "Koordinator Lapangan (junior)",
    "Kurir", "Kurir Motor", "Kurir Mobil", "Laundry Staff", "Live Streaming Host", "Loader Gudang", "Logistic Admin",
    "Logistic Operator", "Logistic Staff", "Maintenance Staff", "Market Place Admin", "Marketing Admin",
    "Marketing Executive (entry level)", "Marketing Staff", "Mekanik Helper", "Merchandiser", "Messenger",
    "Mobile Promotor", "Network Support (basic)", "Network Technician (basic)", "Night Auditor (basic)",
    "Night Shift Staff", "Office Boy (OB)", "Office Girl (OG)", "Operator", "Operator CNC (entry)", "Operator Forklift",
    "Operator Mesin", "Operator Packing", "Operator Printing", "Operator Produksi", "Operator Timbangan",
    "Operator Utility", "Packing Staff", "Packing Checker", "Payroll Admin", "Penjaga Toko", "Personal Shopper",
    "Picker Gudang", "Plant Operator (junior)", "Pramuniaga", "Pramusaji", "Produksi Staff", "Promotor",
    "Public Relation Staff (basic)", "Purchasing Admin", "Purchasing Staff", "QC Helper", "QC Inspector (junior)",
    "Quality Assurance Staff (basic)", "Quality Control (QC) Staff", "Receiving Staff", "Recruitment Admin",
    "Resepsionis", "Retail Assistant", "Retail Staff", "Room Attendant", "Route Driver", "Runner",
    "Rumah Tangga (ART Kantor)", "Sales", "Sales Admin", "Sales Counter", "Sales Executive (entry)",
    "Sales Promotion Girl / Boy (SPG/SPB)", "Sales Taking Order (TO)", "Scheduling Admin", "Security",
    "Service Advisor (junior)", "Shipping Staff", "Site Helper", "Social Media Admin", "Staff Administrasi",
    "Staff Operasional", "Staff Produksi", "Staff Warehouse", "Stockist Staff", "Store Admin", "Store Crew",
    "Surveyor Lapangan", "Technical Support (basic)", "Teknisi", "Teknisi Lapangan", "Telemarketing",
    "Teller (basic)", "Ticketing Staff", "Toko Staff", "Toolman Gudang", "Transport Staff", "Umum Staff",
    "Utility Staff", "Valet Parking", "Verification Staff", "Videographer (basic)", "Visual Merchandiser (basic)",
    "Warehouse Staff", "Web Admin (basic)", "Waiter", "Waitress", "Weighbridge Operator", "Workshop Helper",
    "Yard Operator", "Yard Staff", "2D Drafter (basic)", "2D Operator (percetakan)", "3 Shift Operator",
    "3 Shift Staff", "6 Hari Kerja Staff", "24 Jam Shift Staff"
];

const MASTER_ADDRESSES = [
    "Jl. A. Yani",
    "Jl. Abdul Wahab Syahranie",
    "Jl. Abdurahman Saleh",
    "Jl. Ade Irma Suryani",
    "Jl. Agus Salim",
    "Jl. Ahmad Dahlan",
    "Jl. AR Hakim",
    "Jl. Awang Long",
    "Jl. Basuki Rahmat",
    "Jl. Belimau",
    "Jl. Bengkuring Raya",
    "Jl. Beringin",
    "Jl. Bukit Alaya",
    "Jl. Bung Tomo",
    "Jl. Cendana",
    "Jl. Cipto Mangunkusumo",
    "Jl. DI Panjaitan",
    "Jl. Gajah Mada",
    "Jl. Gatot Subroto",
    "Jl. Gerilya",
    "Jl. HAM Rifaddin",
    "Jl. Hasan Basri",
    "Jl. Hidayatullah",
    "Jl. Imam Bonjol",
    "Jl. Juanda",
    "Jl. Jendral Sudirman",
    "Jl. Kebun Raya Unmul",
    "Jl. Kemakmuran",
    "Jl. KH Wahid Hasyim",
    "Jl. Kusuma Bangsa",
    "Jl. Lambung Mangkurat",
    "Jl. Letjen S. Parman",
    "Jl. Lempake",
    "Jl. Martadinata",
    "Jl. M. Yamin",
    "Jl. Mulawarman",
    "Jl. Mugirejo",
    "Jl. Muara Badak",
    "Jl. Niaga Utara",
    "Jl. Niaga Selatan",
    "Jl. Pahlawan",
    "Jl. Pangeran Antasari",
    "Jl. Pangeran Pranata",
    "Jl. Pangeran Suryanata",
    "Jl. Pelabuhan",
    "Jl. Perjuangan",
    "Jl. PM Noor",
    "Jl. Pakis",
    "Jl. R.A. Kartini",
    "Jl. Ring Road",
    "Jl. Outer Ring Road",
    "Jl. Ruhui Rahayu",
    "Jl. Rumbia",
    "Jl. S. Parman",
    "Jl. Siradj Salman",
    "Jl. Soekarno-Hatta",
    "Jl. Sungai Kapih",
    "Jl. Sentosa",
    "Jl. Teuku Umar",
    "Jl. Tanah Merah",
    "Jl. Tengkawang",
    "Jl. Untung Suropati",
    "Jl. WR Supratman",
    "Jl. Yos Sudarso",
    "Ring Road Samarinda",
    "Outer Ring Road Samarinda",
    "Jalur Samarinda – Bontang",
    "Jalur Samarinda – Tenggarong"
];

// Variables untuk menyimpan history input user
let userEnteredPositions = JSON.parse(localStorage.getItem('userPositions') || '[]');
let userEnteredAddresses = JSON.parse(localStorage.getItem('userAddresses') || '[]');

// Array untuk melacak urutan pencentangan
let attachmentOrder = [];

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

// Fungsi untuk mencari suggestions
function getSuggestions(query, type) {
    query = query.toLowerCase();
    let suggestions = [];
    
    // Gabungkan data master dengan data user
    let allData = [];
    
    switch(type) {
        case 'position':
            allData = [...new Set([...MASTER_POSITIONS, ...userEnteredPositions])];
            break;
        case 'address':
            allData = [...new Set([...MASTER_ADDRESSES, ...userEnteredAddresses])];
            break;
    }
    
    // Filter data berdasarkan query
    suggestions = allData.filter(item => 
        item.toLowerCase().includes(query)
    ).slice(0, 10);
    
    return suggestions;
}

// Fungsi untuk menampilkan suggestions
function showSuggestions(inputElement, suggestions, type) {
    const wrapper = inputElement.closest('.autocomplete-wrapper');
    const suggestionsDiv = wrapper.querySelector('.autocomplete-suggestions');
    
    if (!suggestionsDiv) return;
    
    if (suggestions.length === 0 || inputElement.value.trim() === '') {
        suggestionsDiv.classList.remove('active');
        return;
    }
    
    suggestionsDiv.innerHTML = '';
    
    suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.textContent = suggestion;
        
        item.addEventListener('click', () => {
            inputElement.value = suggestion;
            suggestionsDiv.classList.remove('active');
            generateLetter();
            inputElement.focus();
        });
        
        suggestionsDiv.appendChild(item);
    });
    
    suggestionsDiv.classList.add('active');
}

// Fungsi untuk menyimpan input user ke localStorage (SAAT DOWNLOAD)
function saveUserInputsToLocalStorage() {
    const positionValue = document.getElementById('position').value.trim();
    const addressValue = document.getElementById('address').value.trim();
    
    if (positionValue && !userEnteredPositions.includes(positionValue)) {
        userEnteredPositions.unshift(positionValue);
        if (userEnteredPositions.length > 50) {
            userEnteredPositions.pop();
        }
        localStorage.setItem('userPositions', JSON.stringify(userEnteredPositions));
    }
    
    if (addressValue && !userEnteredAddresses.includes(addressValue)) {
        userEnteredAddresses.unshift(addressValue);
        if (userEnteredAddresses.length > 50) {
            userEnteredAddresses.pop();
        }
        localStorage.setItem('userAddresses', JSON.stringify(userEnteredAddresses));
    }
}

// Setup autocomplete untuk input field
function setupAutocomplete(inputId, type) {
    const input = document.getElementById(inputId);
    const wrapper = input.closest('.autocomplete-wrapper');
    
    if (!input || !wrapper) return;
    
    let selectedIndex = -1;
    let suggestions = [];
    
    input.addEventListener('input', function() {
        const query = this.value;
        suggestions = getSuggestions(query, type);
        selectedIndex = -1;
        showSuggestions(this, suggestions, type);
    });
    
    input.addEventListener('keydown', function(e) {
        const suggestionsDiv = wrapper.querySelector('.autocomplete-suggestions');
        const items = suggestionsDiv.querySelectorAll('.suggestion-item');
        
        if (!suggestionsDiv.classList.contains('active')) return;
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (selectedIndex < items.length - 1) {
                    selectedIndex++;
                    updateSelection(items);
                }
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                if (selectedIndex > 0) {
                    selectedIndex--;
                    updateSelection(items);
                }
                break;
                
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && items[selectedIndex]) {
                    items[selectedIndex].click();
                } else {
                    suggestionsDiv.classList.remove('active');
                    generateLetter();
                }
                break;
                
            case 'Escape':
                suggestionsDiv.classList.remove('active');
                break;
                
            case 'Tab':
                if (selectedIndex >= 0 && items[selectedIndex]) {
                    e.preventDefault();
                    items[selectedIndex].click();
                } else {
                    suggestionsDiv.classList.remove('active');
                }
                break;
        }
    });
    
    function updateSelection(items) {
        items.forEach((item, index) => {
            item.classList.toggle('highlighted', index === selectedIndex);
        });
        
        if (selectedIndex >= 0 && items[selectedIndex]) {
            items[selectedIndex].scrollIntoView({ block: 'nearest' });
        }
    }
    
    document.addEventListener('click', function(e) {
        if (!wrapper.contains(e.target)) {
            const suggestionsDiv = wrapper.querySelector('.autocomplete-suggestions');
            if (suggestionsDiv) {
                suggestionsDiv.classList.remove('active');
            }
        }
    });
    
    input.addEventListener('blur', function() {
        setTimeout(() => {
            const suggestionsDiv = wrapper.querySelector('.autocomplete-suggestions');
            if (suggestionsDiv) {
                suggestionsDiv.classList.remove('active');
            }
        }, 200);
    });
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
            <div class="letter-content">
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
                            <td>Nama Lengkap</td>
                            <td>: ${name}</td>
                        </tr>
                        <tr>
                            <td>Tempat, Tanggal Lahir</td>
                            <td>: ${ttl}</td>
                        </tr>
                        <tr>
                            <td>Pendidikan Terakhir</td>
                            <td>: ${education}</td>
                        </tr>
                        <tr>
                            <td>No. Telepon</td>
                            <td>: ${phone}</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
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

// PERBAIKAN: Download as PDF dengan format penamaan baru
function downloadPDF() {
    const letterPreview = document.getElementById('letterPreview');
    if (letterPreview.querySelector('.letter-instruction')) {
        alert("Harap isi minimal nama lengkap sebelum mengunduh PDF");
        return;
    }
    
    // SIMPAN DATA PENGUNJUNG KE LOCALSTORAGE
    saveUserInputsToLocalStorage();
    
    const formValues = getFormValues();
    const attachments = getCheckedAttachments();
    
    const { company, source, position, address, city, name, ttl, education, phone, homeAddress } = formValues;
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const marginLeft = 20;
    const marginRight = 20;
    const marginTop = 20;
    const contentWidth = 210 - marginLeft - marginRight;
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
    
    // Header dengan perihal dan tanggal sejajar
    doc.setFontSize(12);
    doc.setFont("times", "normal");
    
    // Perihal (kiri atas)
    doc.text("Perihal : Lamaran Pekerjaan", marginLeft, yPos);
    
    // Lampiran di bawah perihal (jika ada)
    if (attachments.length > 0) {
        doc.text(`Lampiran : ${attachments.length} Lembar`, marginLeft, yPos + 6);
    }
    
    // Tanggal (kanan atas) - diposisikan sama dengan perihal
    const dateX = 208 - marginRight;
    doc.text(currentDateWithCity, dateX, yPos, { align: "right" });
    
    if (attachments.length > 0) {
        yPos += 12;
    } else {
        yPos += 6;
    }
    
    // Penerima surat
    checkNewPage(20);
    yPos += 6;
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
    
    // Alamat dengan indentasi
    const addressText = `    ${address || "Alamat"}`;
    doc.text(addressText, marginLeft, yPos);
    yPos += 12;
    
    // Salam pembuka
    checkNewPage(10);
    doc.text("Dengan hormat,", marginLeft, yPos);
    yPos += 10;
    
    // Isi surat dengan justify
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
    
    // Gunakan justify dengan splitTextToSize
    const splitOpeningText = doc.splitTextToSize(openingText, contentWidth);
    splitOpeningText.forEach(line => {
        checkNewPage(6);
        doc.text(line, marginLeft, yPos, { align: "justify" });
        yPos += 6;
    });
    
    yPos += 6;
    
    // Data pribadi dengan tabel sederhana
    checkNewPage(30);
    const labelWidth = 60;
    
    doc.text("Nama Lengkap", marginLeft, yPos);
    doc.text(`: ${name}`, marginLeft + labelWidth, yPos);
    yPos += 7;
    
    doc.text("Tempat, Tanggal Lahir", marginLeft, yPos);
    doc.text(`: ${ttl}`, marginLeft + labelWidth, yPos);
    yPos += 7;
    
    doc.text("Pendidikan Terakhir", marginLeft, yPos);
    doc.text(`: ${education}`, marginLeft + labelWidth, yPos);
    yPos += 7;
    
    doc.text("No. Telepon", marginLeft, yPos);
    doc.text(`: ${phone}`, marginLeft + labelWidth, yPos);
    yPos += 7;
    
    doc.text("Alamat", marginLeft, yPos);
    doc.text(`: ${homeAddress}`, marginLeft + labelWidth, yPos);
    yPos += 12;
    
    // Lampiran jika ada
    if (attachments.length > 0) {
        checkNewPage(18);
        
        let lampiranText = "";
        if (position) {
            lampiranText = `Dengan ini mengajukan permohonan kerja untuk menempati posisi sebagai ${position} pada bisnis/usaha yang Bapak/Ibu pimpin, sebagai bahan pertimbangan berikut saya lampirkan berkas-berkas pendukung:`;
        } else {
            lampiranText = `Dengan ini mengajukan permohonan kerja pada bisnis/usaha yang Bapak/Ibu pimpin, sebagai bahan pertimbangan berikut saya lampirkan berkas-berkas pendukung:`;
        }
        
        const splitLampiranText = doc.splitTextToSize(lampiranText, contentWidth);
        splitLampiranText.forEach(line => {
            checkNewPage(6);
            doc.text(line, marginLeft, yPos, { align: "justify" });
            yPos += 6;
        });
        
        yPos += 4;
        
        // Daftar lampiran
        attachments.forEach((item, index) => {
            checkNewPage(7);
            doc.text(`${index + 1}. ${item}`, marginLeft + 5, yPos);
            yPos += 7;
        });
        
        yPos += 6;
    }
    
    // Penutup dengan justify
    checkNewPage(18);
    const closingText = "Demikian surat lamaran ini saya ajukan sebagai bahan pertimbangan. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.";
    
    const splitClosingText = doc.splitTextToSize(closingText, contentWidth);
    splitClosingText.forEach(line => {
        checkNewPage(6);
        doc.text(line, marginLeft, yPos, { align: "justify" });
        yPos += 6;
    });
    
    // Tanda tangan di pojok kanan
    yPos += 20;
    checkNewPage(35);
    
    const ttdX = 185; // Posisi kanan
    doc.text("Hormat saya,", ttdX, yPos, { align: "right" });
    doc.text(name, ttdX, yPos + 20, { align: "right" });
    
    // PERBAIKAN: Format penamaan file baru - Surat_Lamar_NamaBisnisUsaha
    let companyNameForFilename = company || "Perusahaan";
    
    // Bersihkan nama perusahaan untuk nama file
    let cleanCompanyName = companyNameForFilename
        .replace(/[^a-zA-Z0-9\s]/g, '') // Hapus karakter khusus
        .replace(/\s+/g, '_')           // Ganti spasi dengan underscore
        .substring(0, 50);              // Batasi panjang nama
    
    // Jika nama perusahaan kosong, gunakan "Perusahaan"
    if (!cleanCompanyName || cleanCompanyName.trim() === '') {
        cleanCompanyName = "Perusahaan";
    }
    
    // Format nama file: Surat_Lamar_NamaBisnisUsaha.pdf
    const filename = `Surat_Lamar_${cleanCompanyName}.pdf`;
    
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

// Setup autocomplete untuk semua field
function setupAllAutocomplete() {
    setupAutocomplete('position', 'position');
    setupAutocomplete('address', 'address');
}

// Add event listeners for live update
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
    setupAllAutocomplete();
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