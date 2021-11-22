class CreateBugs < ActiveRecord::Migration[6.1]
  def change
    create_table :bugs do |t|
      t.string :title
      t.text :description
      t.text :details
      t.integer :user_id
      t.integer :project_id
      t.string :bug_id
      t.string :priority
      t.date :due_date
      t.date :completed_date
      t.boolean :complete

      t.timestamps
    end
  end
end
