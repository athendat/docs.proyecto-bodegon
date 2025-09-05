/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introducción',
    },
    {
      type: 'category',
      label: 'Páginas',
      items: [
        'admin/pages/README',
        'admin/pages/home/README',
        'admin/pages/dashboard/README',
        'admin/pages/profile/README',
      ],
    },
    {
      type: 'category',
      label: 'Configuración',
      items: [
        'admin/settings/README',
        'admin/settings/configs/README',
        'admin/settings/roles/README',
        'admin/settings/users/README',
        'admin/settings/rules/README',
        'admin/settings/traces/README',
      ],
    },
    {
      type: 'category',
      label: 'Negocios',
      items: [
        'admin/operations/merchants/README',
      ],
    },
    {
      type: 'category',
      label: 'Listas',
      items: [
        'admin/lists/README',
        'admin/lists/brands/README',
        'admin/lists/categories/README',
        'admin/lists/currencies/README',
        'admin/lists/payment-gateways/README',
        'admin/lists/rates/README',
        'admin/lists/uom/README',
      ],
    },
    {
      type: 'category',
      label: 'Productos',
      items: [
        'admin/operations/products/README',
        'admin/media/README',
        'admin/media/attachments/README',
      ],
    },
    {
      type: 'category',
      label: 'Órdenes',
      items: [
        'admin/operations/orders/README',
        'admin/operations/shipments/README',
        'admin/operations/locations/README',
        'admin/operations/reviews/README',
      ],
    },
    {
      type: 'category',
      label: 'Finanzas',
      items: [
        'admin/finance/README',
        'admin/finance/transactions/README',
        'admin/finance/withdraws/README',
        'admin/operations/wallets/README',
        'admin/payments/README',
        'admin/payments/complete-payment/README',
        'admin/payments/cancel-payment/README',
      ],
    },
    {
      type: 'category',
      label: 'Inventario',
      items: [
        'admin/operations/stock/README',
      ],
    },
    {
      type: 'category',
      label: 'Sistema',
      items: [
        'admin/system/README',
        'admin/system/modules/README',
      ],
    },
  ],
};
