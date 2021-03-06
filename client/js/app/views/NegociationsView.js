class NegociationsView extends View {

    constructor(element) {
        super(element);
    }

    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
        <tbody>
            ${model.negociations.map(n => `
                    
                    <tr>
                        <td>${DateHelper.dateToText(n.date)}</td>
                        <td>${n.amount}</td>
                        <td>${n.value}</td>
                        <td>${n.size}</td>
                    </tr>
            
            `).join('')}
        </tbody>
        
        <tfoot>
            <td colspan="3"></td>
            <td>
                ${model.negociations.reduce((total, n) => total + n.size, 0.0)}
            </td>
        </tfoot>
        </table> 
        `;
    }
}
