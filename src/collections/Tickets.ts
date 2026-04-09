import { CollectionConfig } from 'payload'

export const Tickets: CollectionConfig = {
  slug: 'tickets',
  labels: {
    singular: 'Ticket',
    plural: 'Tickets',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'price', 'available', 'quantity'],
    group: 'Registrations',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Ticket Name',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'type',
      type: 'select',
      label: 'Ticket Type',
      required: true,
      options: [
        { label: 'Attendee', value: 'attendee' },
        { label: 'Sponsor', value: 'sponsor' },
        { label: 'Exhibitor', value: 'exhibitor' },
      ],
    },
    {
      name: 'subType',
      type: 'select',
      label: 'Sub Type',
      options: [
        { label: 'Early Bird 1', value: 'early-bird-1' },
        { label: 'Early Bird 2', value: 'early-bird-2' },
        { label: 'Regular', value: 'regular' },
        { label: 'Platinum', value: 'platinum' },
        { label: 'Gold', value: 'gold' },
        { label: 'Silver', value: 'silver' },
        { label: 'Bronze', value: 'bronze' },
        { label: 'Small Booth', value: 'small' },
        { label: 'Medium Booth', value: 'medium' },
        { label: 'Large Booth', value: 'large' },
      ],
    },
    {
      name: 'price',
      type: 'number',
      label: 'Price (USD)',
      required: true,
    },
    {
      name: 'quantity',
      type: 'number',
      label: 'Total Quantity',
      required: true,
    },
    {
      name: 'available',
      type: 'number',
      label: 'Available Tickets',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'earlyBirdEnd',
      type: 'date',
      label: 'Early Bird End Date',
      admin: {
        condition: (data) => data.subType?.includes('early-bird'),
      },
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefits/Features',
      fields: [
        {
          name: 'feature',
          type: 'text',
          label: 'Feature',
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, operation }) => {
        if (operation === 'create') {
          // Set available tickets equal to quantity initially
          data.available = data.quantity
        }
        return data
      },
    ],
  },
}
