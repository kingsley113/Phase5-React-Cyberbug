class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :projectTitle
      t.string :projectId
			t.text :projectDescription

      t.timestamps
    end
  end
end
