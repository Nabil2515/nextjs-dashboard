import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredTickets } from '@/app/lib/data';

interface Ticket {
  id: string;
  supplierId: string;
  clientId: string;
  rizCode: string;
  signature: string;
  AP: string;
  gdsOfficeId: string;
  ticketNumber: string;
  originNumber: string;
  passenger: string;
  pnrCompany: string;
  pnrAmadeus: string;
  bookingClass: string;
  network: string; // National or International
  bookingDate: string; // Booking date
  date: string; // Uploading Date
  status: string; // emis, annulé, revalidate, emd
  source: string; // Amadeus, Galileo, Platform
  sourceFormat: string; // CSV, PDF, AIR
  transportingCarrier: {
    code: string;
    name: string;
  };
  departureDestination: {
    locations: string;
    departureDate: string;
    departureTime: string;
    arrivalDate: string;
    arrivalTime: string;
  };
  totalPrice: {
    baseAmount: number;
    totalAmount: number;
    treasuryDZ: number;
    taxXE: number;
    surchargeYR: number;
    timbreDZ: number;
    taxesXT: number;
  };
}

export default async function TicketsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const tickets = await fetchFilteredTickets(query, currentPage) as Ticket[];
  console.log(tickets);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {tickets?.map((ticket) => (
              <div
                key={ticket.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{ticket.passenger}</p>
                    </div>
                    <p className="text-sm text-gray-500">{ticket.pnrCompany}</p>
                  </div>
                  <InvoiceStatus status={ticket.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(ticket.totalPrice.totalAmount)}
                    </p>
                    <p>{formatDateToLocal(ticket.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={ticket.id} />
                    <DeleteInvoice id={ticket.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Passenger
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  PNR Company
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Source
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Airline
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Route
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tickets?.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{ticket.passenger}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {ticket.pnrCompany}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(ticket.totalPrice.totalAmount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(ticket.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={ticket.status} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {ticket.source}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {ticket.transportingCarrier.name} ({ticket.transportingCarrier.code})
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {ticket.departureDestination.locations}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={ticket.id} />
                      <DeleteInvoice id={ticket.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}