# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# PROJECTS
p1 = Project.new
p1.projectTitle = "First Test Project"
p1.projectId = "QBAXJ1"
p1.projectDescription = "This is the first sample project created"
p1.save

p2 = Project.new
p2.projectTitle = "Second Sample Project"
p2.projectId = "EANK4P"
p2.projectDescription = "This is the second sample project created"
p2.save

p3 = Project.new
p3.projectTitle = "Third Buggy Project"
p3.projectId = "U3SZMC"
p3.projectDescription = "This is the third sample project created"
p3.save

p4 = Project.new
p4.projectTitle = "Fourth Faulty Project"
p4.projectId = "4861FC"
p4.projectDescription = "This is the fourth and last seed project created"
p4.save

# BUGS
b1 = Bug.new
b1.bugTitle = "Sample Bug 1"
b1.bugId = "FTYH7J"
b1.bugDescription = "Sample bug for testing"
b1.bugDetails = "Sample bug details for testing"
b1.bugTags = "one, two, three, four"
b1.bugTeamMember = ""
b1.bugLineNo = ""
b1.bugPriority = "Critical"
b1.bugDueDate = ""
b1.bugCompletedDate = ""
b1.bugComplete = false
b1.bugStatus = "Not Started"
b1.project = p1 
b1.save

b2 = Bug.new
b2.bugTitle = "Sample Bug 2"
b2.bugId = "PNUX5S"
b2.bugDescription = "Sample bug for testing"
b2.bugDetails = "Sample bug details for testing"
b2.bugTags = "one, two"
b2.bugTeamMember = ""
b2.bugLineNo = ""
b2.bugPriority = "Critical"
b2.bugDueDate = ""
b2.bugCompletedDate = ""
b2.bugComplete = false
b2.bugStatus = "Not Started"
b2.project = p1 
b2.save

b3 = Bug.new
b3.bugTitle = "Sample Bug 3"
b3.bugId = "WC632M"
b3.bugDescription = "Sample bug for testing"
b3.bugDetails = "Sample bug details for testing"
b3.bugTags = "one, two, three, four"
b3.bugTeamMember = ""
b3.bugLineNo = ""
b3.bugPriority = "Critical"
b3.bugDueDate = ""
b3.bugCompletedDate = ""
b3.bugComplete = false
b3.bugStatus = "Not Started"
b3.project = p1 
b3.save

b4 = Bug.new
b4.bugTitle = "Sample Bug 4"
b4.bugId = "XT90Z2"
b4.bugDescription = "Sample bug for testing"
b4.bugDetails = "Sample bug details for testing"
b4.bugTags = "three, four"
b4.bugTeamMember = ""
b4.bugLineNo = ""
b4.bugPriority = "High"
b4.bugDueDate = ""
b4.bugCompletedDate = ""
b4.bugComplete = false
b4.bugStatus = "Not Started"
b4.project = p1 
b4.save

b5 = Bug.new
b5.bugTitle = "Sample Bug 5"
b5.bugId = "654BHU"
b5.bugDescription = "Sample bug for testing"
b5.bugDetails = "Sample bug details for testing"
b5.bugTags = "one"
b5.bugTeamMember = ""
b5.bugLineNo = ""
b5.bugPriority = "Critical"
b5.bugDueDate = ""
b5.bugCompletedDate = ""
b5.bugComplete = false
b5.bugStatus = "Not Started"
b5.project = p1 
b5.save

b6 = Bug.new
b6.bugTitle = "Sample Bug 6"
b6.bugId = "RECHTH"
b6.bugDescription = "Sample bug for testing"
b6.bugDetails = "Sample bug details for testing"
b6.bugTags = "four"
b6.bugTeamMember = ""
b6.bugLineNo = ""
b6.bugPriority = "Medium"
b6.bugDueDate = ""
b6.bugCompletedDate = ""
b6.bugComplete = false
b6.bugStatus = "Not Started"
b6.project = p1 
b6.save

b7 = Bug.new
b7.bugTitle = "Sample Bug 7"
b7.bugId = "WCPY73"
b7.bugDescription = "Sample bug for testing"
b7.bugDetails = "Sample bug details for testing"
b7.bugTags = "four, five"
b7.bugTeamMember = ""
b7.bugLineNo = ""
b7.bugPriority = "Roadblock"
b7.bugDueDate = ""
b7.bugCompletedDate = ""
b7.bugComplete = false
b7.bugStatus = "Not Started"
b7.project = p2 
b7.save

b8 = Bug.new
b8.bugTitle = "Sample Bug 8"
b8.bugId = "QDBUIG"
b8.bugDescription = "Sample bug for testing"
b8.bugDetails = "Sample bug details for testing"
b8.bugTags = "one, two, four"
b8.bugTeamMember = ""
b8.bugLineNo = ""
b8.bugPriority = "Low"
b8.bugDueDate = ""
b8.bugCompletedDate = ""
b8.bugComplete = false
b8.bugStatus = "Not Started"
b8.project = p2 
b8.save

b9 = Bug.new
b9.bugTitle = "Sample Bug 9"
b9.bugId = "S198BM"
b9.bugDescription = "Sample bug for testing"
b9.bugDetails = "Sample bug details for testing"
b9.bugTags = "one, two, three, four"
b9.bugTeamMember = ""
b9.bugLineNo = ""
b9.bugPriority = "Critical"
b9.bugDueDate = ""
b9.bugCompletedDate = ""
b9.bugComplete = false
b9.bugStatus = "Not Started"
b9.project = p3 
b9.save

# USERS