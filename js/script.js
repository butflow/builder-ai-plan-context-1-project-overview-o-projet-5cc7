// View Switching Logic
    const navItems = document.querySelectorAll('[data-nav]');
    const views = document.querySelectorAll('[data-view]');
    const breadcrumb = document.getElementById('breadcrumb-active');

    function switchView(viewId) {
        views.forEach(v => v.classList.add('hidden'));
        const targetView = document.querySelector(`[data-view="${viewId}"]`);
        if (targetView) targetView.classList.remove('hidden');

        navItems.forEach(n => {
            n.classList.remove('active');
            if (n.getAttribute('data-nav') === viewId) n.classList.add('active');
        });

        const navLabel = document.querySelector(`[data-nav="${viewId}"]`);
        if (navLabel) {
            breadcrumb.innerText = navLabel.innerText.replace(/[^\w\sÀ-ú]/g, '').trim();
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => switchView(item.getAttribute('data-nav')));
    });

    // Tab Switching Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.add('hidden'));
            btn.classList.add('active');
            const target = document.getElementById(`tab-${btn.getAttribute('data-tab')}`);
            if (target) target.classList.remove('hidden');
        });
    });

    // Data Generation
    const orders = [
        { id: '#ORD-2941', customer: 'Beatriz Oliveira', date: 'Hoje, 14:20', channel: 'Mobile App', total: 'R$ 489,90', status: 'Pago', method: 'Pix' },
        { id: '#ORD-2940', customer: 'Carlos Eduardo', date: 'Hoje, 13:05', channel: 'Desktop', total: 'R$ 1.250,00', status: 'Pendente', method: 'Cartão' },
        { id: '#ORD-2939', customer: 'Mariana Silva', date: 'Hoje, 11:45', channel: 'Instagram', total: 'R$ 215,00', status: 'Pago', method: 'Pix' },
        { id: '#ORD-2938', customer: 'Roberto Lima', date: 'Ontem, 18:30', channel: 'Desktop', total: 'R$ 890,50', status: 'Enviado', method: 'Cartão' },
        { id: '#ORD-2937', customer: 'Julia Costa', date: 'Ontem, 15:10', channel: 'Mobile App', total: 'R$ 340,00', status: 'Entregue', method: 'Pix' },
        { id: '#ORD-2936', customer: 'Pedro Rocha', date: '04 Dez, 2023', channel: 'WhatsApp', total: 'R$ 155,90', status: 'Cancelado', method: 'Boleto' },
        { id: '#ORD-2935', customer: 'Fernanda M.', date: '04 Dez, 2023', channel: 'Desktop', total: 'R$ 420,00', status: 'Entregue', method: 'Cartão' },
        { id: '#ORD-2934', customer: 'Lucas Neto', date: '03 Dez, 2023', channel: 'Mobile App', total: 'R$ 98,00', status: 'Pago', method: 'Pix' },
        { id: '#ORD-2933', customer: 'Ana Paula', date: '03 Dez, 2023', channel: 'Instagram', total: 'R$ 670,00', status: 'Enviado', method: 'Cartão' },
        { id: '#ORD-2932', customer: 'Tiago Alves', date: '02 Dez, 2023', channel: 'Desktop', total: 'R$ 1.100,00', status: 'Entregue', method: 'Pix' },
        { id: '#ORD-2931', customer: 'Sérgio Moro', date: '02 Dez, 2023', channel: 'WhatsApp', total: 'R$ 290,00', status: 'Pago', method: 'Cartão' },
        { id: '#ORD-2930', customer: 'Clara Nunes', date: '01 Dez, 2023', channel: 'Mobile App', total: 'R$ 450,00', status: 'Entregue', method: 'Pix' }
    ];

    const products = [
        { sku: 'MOD-V-001', name: 'Vestido Midi Seda Marinho', cat: 'Vestuário', price: 'R$ 320,00', stock: 45, status: 'Ativo' },
        { sku: 'MOD-C-012', name: 'Mocassim Couro Legítimo', cat: 'Calçados', price: 'R$ 285,00', stock: 12, status: 'Ativo' },
        { sku: 'MOD-B-005', name: 'Blazer Slim Fit Cinza', cat: 'Vestuário', price: 'R$ 450,00', stock: 8, status: 'Baixo Estoque' },
        { sku: 'MOD-A-012', name: 'Cinto Couro Fivela Ouro', cat: 'Acessórios', price: 'R$ 89,00', stock: 120, status: 'Ativo' },
        { sku: 'MOD-V-022', name: 'Camiseta Algodão Egípcio', cat: 'Vestuário', price: 'R$ 120,00', stock: 200, status: 'Ativo' },
        { sku: 'MOD-S-009', name: 'Saia Midi Plissada', cat: 'Vestuário', price: 'R$ 198,00', stock: 0, status: 'Esgotado' },
        { sku: 'MOD-T-015', name: 'Tênis Casual Branco', cat: 'Calçados', price: 'R$ 240,00', stock: 34, status: 'Ativo' },
        { sku: 'MOD-J-002', name: 'Jaqueta Jeans Oversized', cat: 'Vestuário', price: 'R$ 310,00', stock: 15, status: 'Ativo' },
        { sku: 'MOD-P-044', name: 'Calça Alfaiataria Preta', cat: 'Vestuário', price: 'R$ 220,00', stock: 56, status: 'Ativo' },
        { sku: 'MOD-O-001', name: 'Óculos de Sol Aviador', cat: 'Acessórios', price: 'R$ 150,00', stock: 22, status: 'Ativo' }
    ];

    function getBadgeClass(status) {
        switch(status) {
            case 'Pago':
            case 'Entregue':
            case 'Ativo': return 'badge-success';
            case 'Enviado': return 'badge-info';
            case 'Pendente':
            case 'Baixo Estoque': return 'badge-warning';
            case 'Cancelado':
            case 'Esgotado': return 'badge-error';
            default: return '';
        }
    }

    function render() {
        // Dashboard Orders
        const dashOrders = document.getElementById('dashboard-orders-list');
        dashOrders.innerHTML = orders.slice(0, 5).map(o => `
            <tr>
                <td class="text-mono">${o.id}</td>
                <td style="font-weight: 700;">${o.customer}</td>
                <td style="color: var(--muted);">${o.date}</td>
                <td>${o.channel}</td>
                <td style="font-weight: 700;">${o.total}</td>
                <td><span class="badge ${getBadgeClass(o.status)}">${o.status}</span></td>
                <td><button class="btn btn-secondary" style="height: 28px; padding: 0 10px;">Detalhes</button></td>
            </tr>
        `).join('');

        // Full Orders
        const fullOrders = document.getElementById('full-orders-list');
        fullOrders.innerHTML = orders.map(o => `
            <tr>
                <td><input type="checkbox"></td>
                <td class="text-mono">${o.id}</td>
                <td style="font-weight: 700;">${o.customer}</td>
                <td style="color: var(--muted);">${o.date}</td>
                <td><span style="font-size: 11px; font-weight: 600;">${o.method}</span></td>
                <td style="font-weight: 700;">${o.total}</td>
                <td><span class="badge ${getBadgeClass(o.status)}">${o.status}</span></td>
                <td><button class="btn btn-secondary" style="height: 28px; padding: 0 10px;">Gerenciar</button></td>
            </tr>
        `).join('');

        // Products
        const fullProducts = document.getElementById('full-products-list');
        fullProducts.innerHTML = products.map(p => `
            <tr>
                <td class="text-mono">${p.sku}</td>
                <td style="font-weight: 700;">${p.name}</td>
                <td>${p.cat}</td>
                <td style="font-weight: 700;">${p.price}</td>
                <td>${p.stock} un</td>
                <td><span class="badge ${getBadgeClass(p.status)}">${p.status}</span></td>
                <td>
                    <button class="btn btn-secondary" style="height: 28px; padding: 0 8px;">📝</button>
                    <button class="btn btn-secondary" style="height: 28px; padding: 0 8px;">🗑️</button>
                </td>
            </tr>
        `).join('');
    }

    window.onload = render;