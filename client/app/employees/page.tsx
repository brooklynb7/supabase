import { createClient } from '@/lib/supabase/server';

export default async function Employees() {
  const supabase = await createClient();
  const { data: employees, error } = await supabase.from('employees').select();

  if (error) {
    return (
      <div>
        <h1>Error loading employees</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div>
      <h1>Employees</h1>
      <pre>{JSON.stringify(employees ?? [], null, 2)}</pre>
    </div>
  );
}
