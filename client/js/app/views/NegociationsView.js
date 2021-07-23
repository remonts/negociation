class NegociationsView {

    constructor(element) {
        this._element = element;
    }

    _template(model) {
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
        </tfoot>
        </table> 
        `;
    }

    update(model) {
        this._element.innerHTML = this._template(model);
    }
}
