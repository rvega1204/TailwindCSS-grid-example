import { data } from "../data"; // Importing the data to display in the grid

const CssGrid = () => {
    // Defining the common styles for the grid boxes
    const boxStyle = 'bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center';
    
  return (
    <div className="grid md:grid-cols-4 auto-rows-[300px] gap-4 my-10">
        {/* Looping through the data array to display each item in the grid */}
        {data.map((item, index) => (
            <div
                key={index} // Using index as the unique key for each item
                className={`${boxStyle} 
                    ${index === 0 || index === 4 || index === 5 || index === 6 ? 'md:col-span-2' : ''} 
                    ${index === 2 ? 'md:row-span-2' : ''}`}
                /* Conditionally adding classes:
                    - For items with specific indices (0, 4, 5, 6), span 2 columns on medium screens.
                    - For the item at index 2, span 2 rows on medium screens. */
            >
                {/* Displaying the title and value of each item */}
                <h2 className="text-xl text-gray-600">{item.title}</h2> {/* Title with gray color */}
                <p className="font-bold text-2xl">{item.value}</p> {/* Value with bold and larger font */}
            </div>
        ))}
    </div>
  );
}

export default CssGrid; // Exporting the CssGrid component for use in other parts of the application