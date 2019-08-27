// Generates board HTML
window.getBoardSkeletonHtml = (length) => {
  // Only use 19 letters for max board length
  var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S']
    .slice(0, length);
  var tds = letters.map(() => `<td><button></button></td>`).join(''); 
  var trs = letters.map((char, i) => `
    <tr>
      <th scope="row">${length-i}</th>
      ${tds}
      <th scope="row">${length-i}</th>
    </tr>
  `).join('');

  return `
    <table>
      <thead>
        <tr>
          <th scope="col"></th>
          <! Create each of the table header columns below >
          ${letters.map((char) => `<th scope="col">${char}</th>`).join('')}
        </tr>
      </thead>

      <tbody>
        ${trs}
      </tbody>

      <tfoot>
        <tr>
          <th scope="col"></th>
          <! Create each of the table header columns below >
          ${letters.map((char) => `<th scope="col">${char}</th>`).join('')}
        </tr>
      </tfoot>
    </table>
  `;
};
