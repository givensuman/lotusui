export default function Table() {
    return (
        <div className=" flex flex-col space-y-4">
            <table className="table">
                <caption>Imperial to metric conversion factors</caption>
                <thead>
                    <tr>
                        <th>to convert</th>
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
            <h1>Size Variants</h1>
            <table className="table is-sm">
                <caption>Imperial to metric conversion factors</caption>
                <thead>
                    <tr>
                        <th>to convert</th>
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
            <table className="table is-lg">
                <caption>Imperial to metric conversion factors</caption>
                <thead>
                    <tr>
                        <th>to convert</th>
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
            <h1>Style Variant</h1>
            <table className="table is-striped">
                <caption>Imperial to metric conversion factors</caption>
                <thead>
                    <tr>
                        <th>to convert</th>
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