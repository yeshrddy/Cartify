import React from 'react'
import { Home, ChevronRight } from 'lucide-react'

export default function Breadcrumb() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
          >
            <Home className="mr-4 h-4 w-4" />
            Documentation
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            <a href="#" className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
              Application UI
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            <span className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
              Breadcrumbs
            </span>
          </div>
        </li>
      </ol>
    </nav>
  )
}