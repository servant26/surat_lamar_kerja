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
    "Jl. A. Yani", "Jl. A. Yani I", "Jl. A. Yani II",
    "Jl. Abdul Wahab Syahranie", "Jl. Abdurahman Saleh",
    "Jl. Ade Irma Suryani", "Jl. Agus Salim", "Jl. Ahmad Dahlan",
    "Jl. Al Falah", "Jl. AM Sangaji", "Jl. Antasari", "Jl. Anang Hasyim",
    "Jl. APT Pranoto", "Jl. AR Hakim", "Jl. Awang Long",
    "Jl. Baung", "Jl. Basuki Rahmat", "Jl. Basuki Rahmat I", "Jl. Basuki Rahmat II",
    "Jl. Belimau", "Jl. Bengkuring Raya", "Jl. Berambai", "Jl. Beringin",
    "Jl. Biola", "Jl. Bitek", "Jl. Bromo", "Jl. Bukit Alaya", "Jl. Bukit Barisan",
    "Jl. Bung Tomo", "Jl. Cendana", "Jl. Cendrawasih", "Jl. Cipto Mangunkusumo",
    "Jl. Cumi-Cumi", "Jl. D.I. Panjaitan", "Jl. Danau Toba", "Jl. Damai",
    "Jl. Damanhuri", "Jl. Damanhuri II", "Jl. Dr. Soetomo",
    "Jl. Ery Soepardjan", "Jl. Flores", "Jl. Gajah Mada",
    "Jl. Gatot Subroto", "Jl. Gelatik", "Jl. Gerilya", "Jl. Gerilya Solong",
    "Jl. Gunung Belah", "Jl. Gunung Cermai", "Jl. Gunung Kelua", "Jl. Gunung Lingai",
    "Jl. HAM Rifaddin", "Jl. Harmonika", "Jl. Harun Nafsi", "Jl. Hasan Basri",
    "Jl. Hidayatullah", "Jl. Imam Bonjol", "Jl. Irian", "Jl. Jakarta", "Jl. Jawa",
    "Jl. Jelawat", "Jl. Jendral Sudirman", "Jl. Juanda", "Jl. Kakap",
    "Jl. Kalimantan", "Jl. Karang Asam", "Jl. Karang Paci", "Jl. Katamso",
    "Jl. Kebon Agung", "Jl. Kebun Raya Unmul", "Jl. Kemakmuran",
    "Jl. KH Abul Hasan", "Jl. KH Ahmad Dahlan", "Jl. KH Anang Hasyim",
    "Jl. KH Harun Nafsi", "Jl. KH Samanhudi", "Jl. KH Wahid Hasyim I", "Jl. KH Wahid Hasyim II",
    "Jl. Kinibalu", "Jl. Kusuma Bangsa", "Jl. Lambung Mangkurat",
    "Jl. Lempake", "Jl. Lempake Jaya", "Jl. Letjen MT Haryono", "Jl. Letjen S. Parman",
    "Jl. Loa Bakung", "Jl. Loa Duri", "Jl. Loa Janan", "Jl. Loa Kulu",
    "Jl. M. Said", "Jl. M. Yamin", "Jl. Makroman", "Jl. Malioboro",
    "Jl. Marsda A. Saleh", "Jl. Martadinata", "Jl. Merbabu", "Jl. Merdeka",
    "Jl. Muara Badak", "Jl. Mugirejo", "Jl. Mulawarman", "Jl. Muso Salim",
    "Jl. Naga", "Jl. Niaga Selatan", "Jl. Niaga Utara", "Jl. Nusyirwan Ismail",
    "Jl. Otto Iskandardinata", "Jl. P. Antasari", "Jl. P. Hidayatullah", "Jl. P. Sebatik",
    "Jl. P. Suryanata", "Jl. Pahlawan", "Jl. Pakis", "Jl. Palaran",
    "Jl. Pandan Harum", "Jl. Panglima Batur", "Jl. Pasundan", "Jl. Pattimura",
    "Jl. Pelabuhan", "Jl. Pelita", "Jl. Pemuda", "Jl. Pangeran Diponegoro",
    "Jl. Perjuangan", "Jl. Perniagaan", "Jl. PM Noor", "Jl. Pramuka",
    "Jl. Pulau Banda", "Jl. Pulau Derawan", "Jl. Pulau Flores", "Jl. Pulau Kakaban",
    "Jl. Pulau Maratua", "Jl. Pulau Sebatik", "Jl. R.A. Kartini", "Jl. Rajawali",
    "Jl. Rapak Indah", "Jl. Remaja", "Jl. Riau", "Jl. Ring Road I", "Jl. Ring Road II",
    "Jl. Ruhui Rahayu", "Jl. Rumbia", "Jl. S. Parman", "Jl. Sambutan",
    "Jl. Sebulu", "Jl. Sedap Malam", "Jl. Semani", "Jl. Sempaja", "Jl. Sentosa",
    "Jl. Sidodadi", "Jl. Sidomulyo", "Jl. Siloam", "Jl. Siradj Salman",
    "Jl. Soekarno-Hatta", "Jl. Sultan Alimuddin", "Jl. Sultan Hasanuddin",
    "Jl. Sultan Sulaiman", "Jl. Sungai Ampal", "Jl. Sungai Dama", "Jl. Sungai Kapih",
    "Jl. Sungai Keledang", "Jl. Suryanata", "Jl. Sutami", "Jl. Syahrani Dahlan",
    "Jl. Tarmidi", "Jl. Tanah Merah", "Jl. Tanjung Karang", "Jl. Teuku Umar",
    "Jl. Tengkawang", "Jl. Teratai", "Jl. Trisari", "Jl. Tridharma",
    "Jl. Untung Suropati", "Jl. Urip Sumoharjo", "Jl. Wahid Hasyim",
    "Jl. Wolter Monginsidi", "Jl. WR Supratman", "Jl. Yos Sudarso"
];

// Variables untuk menyimpan history input user
let userEnteredPositions = JSON.parse(localStorage.getItem('userPositions') || '[]');
let userEnteredAddresses = JSON.parse(localStorage.getItem('userAddresses') || '[]');

// Array untuk melacak urutan pencentangan
let attachmentOrder = [];

// Data pribadi tetap (otomatis)
const PROFILE = {
    name: "Ali Khatami",
    ttl: "Tanah Grogot, 26 April 2003",
    education: "S1 Prodi Sistem Informasi Universitas Mulawarman",
    phone: "083813414319",
    homeAddress: "Jl. Trisari Gg. Sinarsari RT 19",
    city: "Samarinda"
};

// Get current date with city
function getCurrentDateWithCity() {
    const now = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('id-ID', options);
    return `${PROFILE.city}, ${formattedDate}`;
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
    const rawCompany = (document.getElementById('company') ? document.getElementById('company').value : '').trim();
    const rawPosition = (document.getElementById('position') ? document.getElementById('position').value : '').trim();
    const rawAddress = (document.getElementById('address') ? document.getElementById('address').value : '').trim();

    return {
        company: toTitleCase(rawCompany),
        position: toTitleCase(rawPosition),
        address: toTitleCase(rawAddress),
        source: document.getElementById('source') ? document.getElementById('source').value : 'Instagram',
        city: PROFILE.city,
        name: PROFILE.name,
        ttl: PROFILE.ttl,
        education: PROFILE.education,
        phone: PROFILE.phone,
        homeAddress: PROFILE.homeAddress
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

// Fungsi untuk mencari suggestions (Lokal Samarinda + Custom User)
function getSuggestions(query, type) {
    query = query.toLowerCase();
    let suggestions = [];

    let allData = [];
    switch (type) {
        case 'position':
            allData = [...new Set([...MASTER_POSITIONS, ...userEnteredPositions])];
            break;
        case 'address':
            allData = [...new Set([...MASTER_ADDRESSES, ...userEnteredAddresses])];
            break;
    }

    suggestions = allData.filter(item =>
        item.toLowerCase().includes(query)
    ).slice(0, 10);

    return suggestions;
}

// Cache hasil query OpenStreetMap agar hemat request & super cepat
const osmAddressCache = {};
let osmAbortController = null;

// Fungsi fetch alamat online OpenStreetMap (khusus Samarinda)
async function fetchSamarindaOnlineAddresses(query) {
    const cleanQuery = query.trim().replace(/^jl\.?\s*/i, '');
    if (cleanQuery.length < 3) return [];

    if (osmAddressCache[cleanQuery.toLowerCase()]) {
        return osmAddressCache[cleanQuery.toLowerCase()];
    }

    if (osmAbortController) {
        osmAbortController.abort();
    }
    osmAbortController = new AbortController();

    try {
        // Query dibatasi spesifik wilayah Samarinda, Indonesia
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cleanQuery)}+Samarinda&format=jsonv2&addressdetails=1&countrycodes=id&limit=8`;
        const res = await fetch(url, {
            signal: osmAbortController.signal,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!res.ok) return [];
        const data = await res.json();

        const results = [];
        data.forEach(item => {
            const addr = item.address || {};
            const road = addr.road || addr.pedestrian || addr.suburb || item.name;
            if (road) {
                let formatted = road;
                if (!/^jl|^jalan/i.test(formatted)) {
                    formatted = `Jl. ${formatted}`;
                }
                formatted = toTitleCase(formatted);
                if (!results.includes(formatted)) {
                    results.push(formatted);
                }
            }
        });

        osmAddressCache[cleanQuery.toLowerCase()] = results;
        return results;
    } catch (err) {
        return [];
    }
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
            focusNextFormField(inputElement);
        });

        suggestionsDiv.appendChild(item);
    });

    suggestionsDiv.classList.add('active');
}

// Fungsi untuk menyimpan input user ke localStorage (disimpan rapi Title Case)
function saveUserInputsToLocalStorage() {
    const rawPosition = document.getElementById('position') ? document.getElementById('position').value.trim() : '';
    const rawAddress = document.getElementById('address') ? document.getElementById('address').value.trim() : '';

    const positionValue = toTitleCase(rawPosition);
    const addressValue = toTitleCase(rawAddress);

    if (positionValue && positionValue.length >= 2 && !MASTER_POSITIONS.includes(positionValue) && !userEnteredPositions.includes(positionValue)) {
        userEnteredPositions.unshift(positionValue);
        if (userEnteredPositions.length > 100) {
            userEnteredPositions.pop();
        }
        localStorage.setItem('userPositions', JSON.stringify(userEnteredPositions));
    }

    if (addressValue && addressValue.length >= 2 && !MASTER_ADDRESSES.includes(addressValue) && !userEnteredAddresses.includes(addressValue)) {
        userEnteredAddresses.unshift(addressValue);
        if (userEnteredAddresses.length > 100) {
            userEnteredAddresses.pop();
        }
        localStorage.setItem('userAddresses', JSON.stringify(userEnteredAddresses));
    }
}

// Setup autocomplete untuk input field (mendukung instant lokal + online fallback)
function setupAutocomplete(inputId, type) {
    const input = document.getElementById(inputId);
    const wrapper = input.closest('.autocomplete-wrapper');

    if (!input || !wrapper) return;

    let selectedIndex = -1;
    let suggestions = [];
    let onlineSearchTimer = null;

    input.addEventListener('input', function () {
        const query = this.value;

        // 1. Tampilkan instant dari daftar lokal Samarinda + riwayat user
        suggestions = getSuggestions(query, type);
        selectedIndex = -1;
        showSuggestions(this, suggestions, type);

        // 2. Jika tipe alamat dan query minimal 3 karakter, cari tambahan dari OpenStreetMap Samarinda
        if (type === 'address' && query.trim().length >= 3) {
            clearTimeout(onlineSearchTimer);
            onlineSearchTimer = setTimeout(async () => {
                const onlineResults = await fetchSamarindaOnlineAddresses(query);
                if (onlineResults.length > 0 && input.value.trim().length >= 3) {
                    // Gabungkan data lokal + data online (tanpa duplikat)
                    const combined = [...new Set([...suggestions, ...onlineResults])].slice(0, 12);
                    suggestions = combined;
                    showSuggestions(input, suggestions, type);
                }
            }, 350);
        }
    });

    input.addEventListener('keydown', function (e) {
        const suggestionsDiv = wrapper.querySelector('.autocomplete-suggestions');
        const items = suggestionsDiv.querySelectorAll('.suggestion-item');

        if (!suggestionsDiv.classList.contains('active')) return;

        switch (e.key) {
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
                focusNextFormField(input);
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

    document.addEventListener('click', function (e) {
        if (!wrapper.contains(e.target)) {
            const suggestionsDiv = wrapper.querySelector('.autocomplete-suggestions');
            if (suggestionsDiv) {
                suggestionsDiv.classList.remove('active');
            }
        }
    });

    input.addEventListener('blur', function () {
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
            letterHTML += `<p>Lampiran : ${attachments.length} Berkas</p>`;
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
            letterHTML += `<p>Bapak/Ibu Pimpinan Perusahaan</p>`;
        }

        letterHTML += `
                    <p>di -</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;${address || "Tempat"}</p>
                </div>
                
                <div class="salutation">
                    <p>Dengan hormat,</p>
                </div>
                
                <div class="letter-body">
        `;

        if (company) {
            if (position) {
                letterHTML += `<p>Berdasarkan informasi yang saya dapatkan melalui platform ${source}, saya mendapati bahwa ${company} sedang membutuhkan karyawan untuk mengisi posisi sebagai <span class="bold">${position}</span>. Berikut ini adalah data pribadi saya:</p>`;
            } else {
                letterHTML += `<p>Berdasarkan informasi yang saya dapatkan melalui platform ${source}, saya mendapati bahwa ${company} sedang membuka lowongan kerja. Berikut ini adalah data pribadi saya:</p>`;
            }
        } else {
            if (position) {
                letterHTML += `<p>Berdasarkan informasi yang saya dapatkan melalui platform ${source}, saya mendapati bahwa perusahaan Anda sedang membutuhkan karyawan untuk mengisi posisi sebagai <span class="bold">${position}</span>. Berikut ini adalah data pribadi saya:</p>`;
            } else {
                letterHTML += `<p>Berdasarkan informasi yang saya dapatkan melalui platform ${source}, saya mendapati bahwa perusahaan Anda sedang membuka lowongan kerja. Berikut ini adalah data pribadi saya:</p>`;
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
                letterHTML += `<p>Dengan ini mengajukan permohonan kerja untuk menempati posisi sebagai <span class="bold">${position}</span> pada bisnis/usaha yang Bapak/Ibu pimpin, sebagai bahan pertimbangan berikut saya lampirkan berkas pendukung:</p>`;
            } else {
                letterHTML += `<p>Dengan ini mengajukan permohonan kerja pada bisnis/usaha yang Bapak/Ibu pimpin, sebagai bahan pertimbangan berikut saya lampirkan berkas pendukung:</p>`;
            }

            if (attachments.length === 1) {
                letterHTML += `<ul class="attachment-list" style="list-style-type: disc;">`;
                letterHTML += `<li>${attachments[0]}</li>`;
                letterHTML += `</ul>`;
            } else {
                letterHTML += `<ol class="attachment-list">`;
                attachments.forEach(item => {
                    letterHTML += `<li>${item}</li>`;
                });
                letterHTML += `</ol>`;
            }
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
    if (typeof syncPreviewHeight === 'function') {
        syncPreviewHeight();
    }
}

// Tab aktif untuk body email: 'general' atau 'it'
let currentEmailTab = 'general';

// Generate email body
function generateEmailBody() {
    const formValues = getFormValues();
    const attachments = getCheckedAttachments();

    const { company, position, name, education, source } = formValues;

    let emailText = '';

    if (!company && !position && !name) {
        emailText = "Mulai mengisi formulir untuk melihat teks pesan yang bisa Anda gunakan saat mengirim lamaran via WhatsApp maupun email.";
    } else {
        emailText = `Kepada Yth.\n`;

        if (company) {
            emailText += `Bapak/Ibu Pimpinan ${company}\n\n`;
        } else {
            emailText += `Bapak/Ibu Pimpinan\n\n`;
        }

        emailText += `Dengan hormat,\n\n`;

        let introText = '';

        if (currentEmailTab === 'it') {
            // Versi Spesifik IT & Web Developer (Portfolio Link)
            introText = `Perkenalkan, saya ${name}, lulusan S1 Prodi Sistem Informasi Universitas Mulawarman dengan IPK 3,87. Memiliki minat yang kuat di bidang Web Development serta pengalaman langsung dalam pengembangan aplikasi web semasa perkuliahan. Pengalaman tersebut menjadi fondasi yang mengantarkan pada karier profesional sebagai web developer. `;

            if (position && company) {
                introText += `Melalui pesan ini, saya hendak mengajukan lamaran pekerjaan untuk posisi ${position} di ${company}. `;
            } else if (position) {
                introText += `Melalui pesan ini, saya hendak mengajukan lamaran pekerjaan untuk posisi ${position} pada bisnis/usaha yang Bapak/Ibu jalankan. `;
            } else if (company) {
                introText += `Melalui pesan ini, saya hendak mengajukan lamaran pekerjaan di ${company}. `;
            } else {
                introText += `Melalui pesan ini, saya hendak mengajukan lamaran pekerjaan pada bisnis/usaha yang Bapak/Ibu jalankan. `;
            }

            introText += `Sebagai bahan pertimbangan, Bapak/Ibu dapat meninjau Portofolio saya melalui tautan berikut: https://myporto-ten-sepia.vercel.app.`;
        } else {
            // Versi General: Lugas, santun, dan sesuai format yang diinginkan
            if (position && company) {
                introText = `Perkenalkan, saya ${name}, lulusan ${education}. Sehubungan dengan informasi lowongan pekerjaan yang saya dapatkan, dengan ini saya mengajukan lamaran pekerjaan untuk posisi ${position} di ${company}.`;
            } else if (position) {
                introText = `Perkenalkan, saya ${name}, lulusan ${education}. Sehubungan dengan informasi lowongan pekerjaan yang saya dapatkan, dengan ini saya mengajukan lamaran pekerjaan untuk posisi ${position} pada bisnis/usaha yang Bapak/Ibu jalankan.`;
            } else if (company) {
                introText = `Perkenalkan, saya ${name}, lulusan ${education}. Sehubungan dengan informasi lowongan pekerjaan yang saya dapatkan, dengan ini saya mengajukan lamaran pekerjaan di ${company}.`;
            } else {
                introText = `Perkenalkan, saya ${name}, lulusan ${education}. Sehubungan dengan informasi lowongan pekerjaan yang saya dapatkan, dengan ini saya mengajukan lamaran pekerjaan pada bisnis/usaha yang Bapak/Ibu jalankan.`;
            }
        }

        emailText += introText;

        if (attachments.length > 0) {
            if (attachments.length === 1) {
                emailText += `\n\nSebagai bahan pertimbangan, saya juga melampirkan berkas yaitu:\n• ${attachments[0]}\n`;
            } else {
                emailText += `\n\nSebagai bahan pertimbangan, saya juga melampirkan berkas pendukung sebagai berikut:\n`;
                attachments.forEach((item, index) => {
                    emailText += `${index + 1}. ${item}\n`;
                });
            }

            emailText += `\nDemikian lamaran ini saya ajukan, atas perhatian dan kesempatan yang Bapak/Ibu berikan saya ucapkan terima kasih.\n\n`;
        } else {
            emailText += `\n\nDemikian lamaran ini saya ajukan, atas perhatian dan kesempatan yang Bapak/Ibu berikan saya ucapkan terima kasih.\n\n`;
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
        saveUserInputsToLocalStorage();
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

function downloadPDF() {
    const formValues = getFormValues();
    if (!formValues.position && !formValues.company) {
        alert("Harap isi posisi atau nama perusahaan terlebih dahulu sebelum mengunduh PDF");
        return;
    }

    // SIMPAN DATA PENGUNJUNG KE LOCALSTORAGE
    saveUserInputsToLocalStorage();

    const attachments = getCheckedAttachments();
    const { company, source, position, address, city, name, ttl, education, phone, homeAddress } = formValues;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
    });

    // Standar Margin Dokumen Word (25mm kiri, kanan, atas)
    const marginLeft = 25;
    const marginRight = 25;
    const marginTop = 25;
    const pageWidth = 210;
    const contentWidth = pageWidth - marginLeft - marginRight; // 160mm
    const rightMarginX = pageWidth - marginRight; // 185mm

    let yPos = marginTop;

    doc.setFont("times", "normal");
    doc.setFontSize(12);

    const lineHeight = 6.2; // Rasio line spacing 1.15-1.2 khas Word

    function checkNewPage(neededHeight) {
        if (yPos + neededHeight > 275) {
            doc.addPage();
            yPos = marginTop;
            return true;
        }
        return false;
    }

    // Algoritma Justify Sejati (rata kiri-kanan seperti MS Word)
    function printJustifiedText(text, x, width, lineH) {
        const lines = doc.splitTextToSize(text, width);
        for (let i = 0; i < lines.length; i++) {
            checkNewPage(lineH);
            const line = lines[i].trim();
            const isLastLine = (i === lines.length - 1);

            if (isLastLine) {
                doc.text(line, x, yPos, { align: 'left' });
            } else {
                const words = line.split(/\s+/);
                if (words.length <= 1) {
                    doc.text(line, x, yPos, { align: 'left' });
                } else {
                    const totalWordsWidth = words.reduce((sum, word) => sum + doc.getTextWidth(word), 0);
                    const totalSpaceWidth = width - totalWordsWidth;
                    const spaceBetweenWords = totalSpaceWidth / (words.length - 1);
                    const normalSpace = doc.getTextWidth(' ');

                    if (spaceBetweenWords > normalSpace * 3.8) {
                        doc.text(line, x, yPos, { align: 'left' });
                    } else {
                        let curX = x;
                        for (let w = 0; w < words.length; w++) {
                            doc.text(words[w], curX, yPos);
                            curX += doc.getTextWidth(words[w]) + spaceBetweenWords;
                        }
                    }
                }
            }
            yPos += lineH;
        }
    }

    const currentDateWithCity = getCurrentDateWithCity();

    // 1. Header: Perihal & Lampiran sejajar dengan Tanggal di margin kanan
    doc.text("Perihal    : Lamaran Pekerjaan", marginLeft, yPos);
    doc.text(currentDateWithCity, rightMarginX, yPos, { align: "right" });

    if (attachments.length > 0) {
        yPos += lineHeight;
        doc.text(`Lampiran : ${attachments.length} Berkas`, marginLeft, yPos);
    }

    yPos += lineHeight * 2;

    // 2. Tujuan Surat (Format surat resmi standar)
    checkNewPage(25);
    doc.text("Kepada Yth.", marginLeft, yPos);
    yPos += lineHeight;

    if (company) {
        doc.text(`Bapak/Ibu Pimpinan ${company}`, marginLeft, yPos);
    } else {
        doc.text("Bapak/Ibu Pimpinan Perusahaan", marginLeft, yPos);
    }
    yPos += lineHeight;

    doc.text("di -", marginLeft, yPos);
    yPos += lineHeight;

    const destAddress = address || "Tempat";
    doc.text(`   ${destAddress}`, marginLeft, yPos);
    yPos += lineHeight * 2;

    // 3. Salam Pembuka
    checkNewPage(15);
    doc.text("Dengan hormat,", marginLeft, yPos);
    yPos += lineHeight * 1.5;

    // 4. Paragraf Pembuka (Kalimat Awal Asli)
    let openingText = "";
    if (company) {
        if (position) {
            openingText = `Berdasarkan informasi yang saya dapatkan melalui platform ${source}, saya mendapati bahwa ${company} sedang membutuhkan karyawan untuk mengisi posisi sebagai ${position}. Berikut ini adalah data pribadi saya:`;
        } else {
            openingText = `Berdasarkan informasi yang saya dapatkan melalui platform ${source}, saya mendapati bahwa ${company} sedang membuka lowongan kerja. Berikut ini adalah data pribadi saya:`;
        }
    } else {
        if (position) {
            openingText = `Berdasarkan informasi yang saya dapatkan melalui platform ${source}, saya mendapati bahwa perusahaan Anda sedang membutuhkan karyawan untuk mengisi posisi sebagai ${position}. Berikut ini adalah data pribadi saya:`;
        } else {
            openingText = `Berdasarkan informasi yang saya dapatkan melalui platform ${source}, saya mendapati bahwa perusahaan Anda sedang membuka lowongan kerja. Berikut ini adalah data pribadi saya:`;
        }
    }

    printJustifiedText(openingText, marginLeft, contentWidth, lineHeight);
    yPos += lineHeight * 0.6;

    // 5. Data Pribadi (Format Tabel Titik Dua Sejajar Rapih Word)
    checkNewPage(45);
    const col1X = marginLeft + 6;
    const colonX = marginLeft + 54;
    const col2X = marginLeft + 58;
    const col2Width = rightMarginX - col2X;

    const personalData = [
        { label: "Nama Lengkap", value: name },
        { label: "Tempat, Tanggal Lahir", value: ttl },
        { label: "Pendidikan Terakhir", value: education },
        { label: "No. Telepon", value: phone },
        { label: "Alamat", value: homeAddress }
    ];

    personalData.forEach(item => {
        checkNewPage(lineHeight);
        doc.text(item.label, col1X, yPos);
        doc.text(":", colonX, yPos);
        
        const splitVal = doc.splitTextToSize(item.value, col2Width);
        doc.text(splitVal[0], col2X, yPos);
        yPos += lineHeight;

        for (let s = 1; s < splitVal.length; s++) {
            checkNewPage(lineHeight);
            doc.text(splitVal[s], col2X, yPos);
            yPos += lineHeight;
        }
    });

    yPos += lineHeight * 0.8;

    // 6. Paragraf Berkas Lampiran (Kalimat Awal Asli)
    if (attachments.length > 0) {
        checkNewPage(25);
        let lampiranText = "";
        if (position) {
            lampiranText = `Dengan ini mengajukan permohonan kerja untuk menempati posisi sebagai ${position} pada bisnis/usaha yang Bapak/Ibu pimpin, sebagai bahan pertimbangan berikut saya lampirkan berkas pendukung:`;
        } else {
            lampiranText = `Dengan ini mengajukan permohonan kerja pada bisnis/usaha yang Bapak/Ibu pimpin, sebagai bahan pertimbangan berikut saya lampirkan berkas pendukung:`;
        }

        printJustifiedText(lampiranText, marginLeft, contentWidth, lineHeight);
        yPos += lineHeight * 0.4;

        // Daftar Lampiran
        const indentList = marginLeft + 8;
        if (attachments.length === 1) {
            checkNewPage(lineHeight);
            doc.text(`\u2022   ${attachments[0]}`, indentList, yPos);
            yPos += lineHeight * 1.4;
        } else {
            attachments.forEach((item, index) => {
                checkNewPage(lineHeight);
                doc.text(`${index + 1}.  ${item}`, indentList, yPos);
                yPos += lineHeight;
            });
            yPos += lineHeight * 0.5;
        }
    }

    // 7. Paragraf Penutup (Kalimat Awal Asli)
    checkNewPage(20);
    const closingText = "Demikian surat lamaran ini saya ajukan sebagai bahan pertimbangan. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.";
    printJustifiedText(closingText, marginLeft, contentWidth, lineHeight);

    // 8. Tanda Tangan (Blok Kanan Bawah Seimbang)
    yPos += lineHeight * 2;
    checkNewPage(35);

    const signX = rightMarginX - 25; // Area blok kanan rapi
    doc.text("Hormat saya,", signX, yPos, { align: "center" });

    yPos += 24; // Ruang tanda tangan ~2.4 cm
    doc.text(name, signX, yPos, { align: "center" });

    // Format penamaan file hasil download: Generator_Page_NamaBisnisUsaha.pdf
    let companyNameForFilename = company || "Document";

    // Bersihkan nama perusahaan untuk nama file
    let cleanCompanyName = companyNameForFilename
        .replace(/[^a-zA-Z0-9\s]/g, '') // Hapus karakter khusus
        .replace(/\s+/g, '_')           // Ganti spasi dengan underscore
        .substring(0, 50);              // Batasi panjang nama

    // Jika nama perusahaan kosong, gunakan "Document"
    if (!cleanCompanyName || cleanCompanyName.trim() === '') {
        cleanCompanyName = "Document";
    }

    // Format nama file: Generator_Page_NamaBisnisUsaha.pdf
    const filename = `Generator_Page_${cleanCompanyName}.pdf`;

    doc.save(filename);
}

// Reset form: kembalikan ke kondisi awal (input kosong, preview tetap tampil)
function resetForm() {
    document.getElementById('company').value = '';
    document.getElementById('position').value = '';
    document.getElementById('address').value = '';
    document.getElementById('source').value = 'Instagram';

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    attachmentOrder = [];

    // Regenerate letter preview & email body seperti saat halaman pertama kali dimuat
    generateLetter();
}

// Setup autocomplete untuk semua field
function setupAllAutocomplete() {
    setupAutocomplete('position', 'position');
    setupAutocomplete('address', 'address');
}

// Add event listeners for live update
function setupLiveUpdate() {
    const desktopElements = [
        'company', 'position', 'address', 'source'
    ];

    desktopElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', generateLetter);
            element.addEventListener('change', generateLetter);
        }
    });

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
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

    // Event listener switch tab email (General vs IT)
    const tabGeneralBtn = document.getElementById('tabGeneralBtn');
    const tabItBtn = document.getElementById('tabItBtn');

    if (tabGeneralBtn && tabItBtn) {
        tabGeneralBtn.addEventListener('click', () => {
            currentEmailTab = 'general';
            tabGeneralBtn.classList.add('active');
            tabItBtn.classList.remove('active');
            generateEmailBody();
        });

        tabItBtn.addEventListener('click', () => {
            currentEmailTab = 'it';
            tabItBtn.classList.add('active');
            tabGeneralBtn.classList.remove('active');
            generateEmailBody();
        });
    }

    generateLetter();
    syncPreviewHeight();

    window.addEventListener('resize', syncPreviewHeight);

    let typingTimer;
    const doneTypingInterval = 300;

    // Format otomatis Title Case saat mengetik atau saat berpindah input
    setupAutoCapitalize();

    const textInputs = document.querySelectorAll('input[type="text"], input[type="tel"]');
    textInputs.forEach(input => {
        input.addEventListener('input', () => {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(() => {
                generateLetter();
                syncPreviewHeight();
            }, doneTypingInterval);
        });

        input.addEventListener('keydown', () => {
            clearTimeout(typingTimer);
        });
    });

    // Setup auto-focus pada awal buka halaman & navigasi Enter antar field
    setupFormEnterNavigation();
});

// Fungsi untuk mengubah teks menjadi Title Case (Setiap Awal Kata Kapital)
function toTitleCase(str) {
    if (!str) return '';
    return str.replace(/\b[a-z\u00C0-\u024F]/gi, function (char) {
        return char.toUpperCase();
    });
}

// Pasang auto-capitalize untuk input form (Company, Position, Address)
function setupAutoCapitalize() {
    const fieldsToCapitalize = ['company', 'position', 'address'];

    fieldsToCapitalize.forEach(id => {
        const input = document.getElementById(id);
        if (!input) return;

        // Saat user selesai mengetik (blur atau enter), format teks input menjadi Title Case rapi & simpan ke riwayat autocomplete
        input.addEventListener('blur', function () {
            if (this.value) {
                const formatted = toTitleCase(this.value);
                if (this.value !== formatted) {
                    this.value = formatted;
                    generateLetter();
                }
                saveUserInputsToLocalStorage();
            }
        });

        // Saat sedang mengetik, ubah huruf pertama tiap kata secara real-time
        input.addEventListener('input', function (e) {
            const start = this.selectionStart;
            const end = this.selectionEnd;
            const originalVal = this.value;
            const formattedVal = toTitleCase(originalVal);

            if (originalVal !== formattedVal) {
                this.value = formattedVal;
                // Pertahankan posisi kursor
                this.setSelectionRange(start, end);
            }
        });
    });
}

// Urutan field input formulir untuk navigasi Enter
const FORM_FIELD_ORDER = ['company', 'position', 'address', 'source'];

function setupFormEnterNavigation() {
    const companyInput = document.getElementById('company');
    if (companyInput) {
        setTimeout(() => companyInput.focus(), 100);
    }

    FORM_FIELD_ORDER.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        el.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                // Jika input ini punya dropdown autocomplete yang sedang aktif, biarkan autocomplete handler yang mengurus
                const wrapper = this.closest('.autocomplete-wrapper');
                if (wrapper) {
                    const suggestionsDiv = wrapper.querySelector('.autocomplete-suggestions');
                    if (suggestionsDiv && suggestionsDiv.classList.contains('active')) {
                        return;
                    }
                }

                e.preventDefault();
                focusNextFormField(this);
            }
        });
    });
}

// Fungsi pindah ke input formulir berikutnya
function focusNextFormField(currentElement) {
    const currentIndex = FORM_FIELD_ORDER.indexOf(currentElement.id);
    if (currentIndex >= 0 && currentIndex < FORM_FIELD_ORDER.length - 1) {
        const nextId = FORM_FIELD_ORDER[currentIndex + 1];
        const nextElement = document.getElementById(nextId);
        if (nextElement) {
            nextElement.focus();
            if (nextElement.select && typeof nextElement.select === 'function') {
                nextElement.select();
            }
        }
    }
}

// Fungsi untuk memastikan preview surat sama tinggi dengan form dan scrollable di desktop
function syncPreviewHeight() {
    if (window.innerWidth > 992) {
        const formContainer = document.querySelector('.form-container');
        const previewContainer = document.querySelector('.preview-container');
        if (formContainer && previewContainer) {
            const formHeight = formContainer.offsetHeight;
            if (formHeight > 0) {
                previewContainer.style.height = `${formHeight}px`;
                previewContainer.style.maxHeight = `${formHeight}px`;
            }
        }
    } else {
        const previewContainer = document.querySelector('.preview-container');
        if (previewContainer) {
            previewContainer.style.height = '';
            previewContainer.style.maxHeight = '';
        }
    }
}