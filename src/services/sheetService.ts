export async function fetchSheetEntries(sheetId: string): Promise<string[]> {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

    const res = await fetch(url);
    const text = await res.text();

    const json = JSON.parse(text.substring(47).slice(0, -2));
    const entries = json.table.rows.map((row: any) => row.c[0].v).slice(1);

    return entries;
}