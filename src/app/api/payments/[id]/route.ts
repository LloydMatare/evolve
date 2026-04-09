// app/api/payments/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const payload = await getPayload({ config: configPromise })
    const { id } = await params

    const payment = await payload.findByID({
      collection: 'payments',
      id,
    })

    return NextResponse.json({
      success: true,
      doc: payment,
    })
  } catch (error: any) {
    console.error('Error fetching payment:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Payment not found' },
      { status: 404 },
    )
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const payload = await getPayload({ config: configPromise })
    const { id } = await params
    const data = await request.json()

    const payment = await payload.update({
      collection: 'payments',
      id,
      data,
    })

    return NextResponse.json({
      success: true,
      message: 'Payment updated successfully',
      doc: payment,
    })
  } catch (error: any) {
    console.error('Error updating payment:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update payment' },
      { status: 500 },
    )
  }
}
