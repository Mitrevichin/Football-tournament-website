export function csvParser(csvDoc) {
  const [headerLine, ...rows] = csvDoc.split('\n'); 
  const headers = headerLine.split(','); 

  return rows.map(row => {
    const values = row.split(','); 
    const obj = {};

    for (let i = 0; i < headers.length; i++) {
      const value = values[i] ? values[i].trim() : ''; 
      obj[headers[i].trim()] = value; 
    }

    return obj;
  });
}
