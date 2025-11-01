import React from 'react'

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-wide">
        {title}
      </h1>
      <div className="flex-1 h-[2px] bg-gradient-to-r from-indigo-500 via-blue-500 to-transparent dark:from-orange-500 dark:via-yellow-500 dark:to-transparent"></div>
    </div>
  )
}

export default SectionTitle

