'use client'

import React from 'react'

interface Column<T> {
  key: keyof T
  header: string
  render?: (value: any, row: T) => React.ReactNode
}

interface TableProps<T> {
  columns: Column<T>[]
  data: T[]
  striped?: boolean
}

export const Table = React.forwardRef<HTMLTableElement, TableProps<any>>(
  ({ columns, data, striped = true }, ref) => {
    return (
      <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950 shadow-lg shadow-slate-950/40">
        <table ref={ref} className="w-full border-collapse text-slate-100">
          <thead>
            <tr className="bg-slate-900/80 border-b border-slate-800">
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="px-6 py-4 text-left text-sm font-semibold tracking-wide"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-slate-800 ${
                  striped && rowIndex % 2 === 1 ? 'bg-slate-950/70' : 'bg-slate-950'
                } hover:bg-slate-900 transition-colors`}
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="px-6 py-4 text-sm text-slate-200"
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : String(row[column.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
)

Table.displayName = 'Table'
