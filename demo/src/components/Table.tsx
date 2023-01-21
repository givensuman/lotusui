const Table = () => {
    return (
        <div className="mx-auto flex flex-col items-center mt-12">
            <table className="table">
                <caption>Imperial to metric conversion factors</caption>
                <thead>
                    <tr>
                        <th>To convert</th>
                        <th>into</th>
                        <th>multiply by</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>inches</td>
                        <td>millimetres (mm)</td>
                        <td>25.4</td>
                    </tr>
                    <tr>
                        <td>feet</td>
                        <td>centimetres (cm)</td>
                        <td>30.48</td>
                    </tr>
                    <tr>
                        <td>yards</td>
                        <td>metres (m)</td>
                        <td>0.91444</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>To convert</th>
                        <th>into</th>
                        <th>multiply by</th>
                    </tr>
                </tfoot>
            </table>
            <table className="table mt-8 table-lg table-striped">
                <caption>Imperial to metric conversion factors</caption>
                <thead>
                    <tr>
                        <th>To convert</th>
                        <th>into</th>
                        <th>multiply by</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>inches</td>
                        <td>millimetres (mm)</td>
                        <td>25.4</td>
                    </tr>
                    <tr>
                        <td>feet</td>
                        <td>centimetres (cm)</td>
                        <td>30.48</td>
                    </tr>
                    <tr>
                        <td>yards</td>
                        <td>metres (m)</td>
                        <td>0.91444</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>To convert</th>
                        <th>into</th>
                        <th>multiply by</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table