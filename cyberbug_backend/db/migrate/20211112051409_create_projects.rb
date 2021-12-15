class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :projectTitle
      t.string :projectId
			t.text :projectDescription
			t.integer :user_id

      t.timestamps
    end
  end
end
