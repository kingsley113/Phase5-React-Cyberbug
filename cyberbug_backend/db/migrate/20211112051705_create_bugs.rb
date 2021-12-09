class CreateBugs < ActiveRecord::Migration[6.1]
  def change
    create_table :bugs do |t|
      t.string :bugTitle
      t.text :bugDescription
      t.text :bugDetails
			t.text :bugTags
			t.string :bugLineNo
      t.integer :project_id
      t.string :bugId
      t.string :bugPriority
      t.date :bugDueDate
      t.date :bugCompletedDate
      t.boolean :bugComplete
			t.string :bugStatus

      t.timestamps
    end
  end
end
