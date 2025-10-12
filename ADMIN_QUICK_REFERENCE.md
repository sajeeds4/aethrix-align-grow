# 🎯 Quick Reference - Job Application Management Features

## 📊 Stats Dashboard
View at-a-glance metrics:
- **Total Applications**: All time
- **New Submissions**: Awaiting review
- **Under Review**: Being evaluated
- **In Interview**: Interview stage
- **Hired**: Successfully hired

---

## 🔍 Search & Filter Bar

### Search Box
Type to search by:
- Candidate name (first or last)
- Email address
- Job position title

### Status Filter
- All Status
- Submitted
- Under Review  
- Interview
- Rejected
- Hired

### Experience Filter (NEW!)
- All Experience
- 0-2 years
- 3-5 years
- 5+ years

### Rating Filter (NEW!)
- All Ratings
- 4+ Stars
- 3+ Stars
- 2+ Stars
- 1+ Stars

---

## 📋 Table Features

### Sortable Columns (NEW!)
Click any column header to sort:
- **Applicant**: A-Z or Z-A
- **Experience**: Low to High or High to Low
- **Rating**: Low to High or High to Low
- **Status**: Alphabetical
- **Applied**: Oldest first or Newest first

Click again to reverse sort direction.

---

## ⭐ Star Rating System (NEW!)

**In Table View:**
- See current rating (filled yellow stars)
- Click any star to change rating (1-5)
- Updates instantly

**In Detail View:**
- Larger star display
- Click to rate candidate
- Useful for candidate comparison

---

## ☑️ Bulk Actions (NEW!)

### Select Multiple Applications
1. Check boxes in first column
2. Select/deselect individual rows
3. Click top checkbox to select all on current page

### Bulk Operations (appear when items selected)
- **Mark as Reviewing**: Move all selected to review
- **Move to Interview**: Schedule interviews for all
- **Reject**: Bulk rejection
- **Delete Selected**: Remove multiple applications

---

## 📄 Pagination (NEW!)

**Rows Per Page:**
- 10 rows (default)
- 25 rows
- 50 rows
- 100 rows

**Navigation:**
- See current page and total pages
- "Previous" button
- "Next" button
- Total filtered count displayed

---

## 📧 Email Templates (NEW!)

### Quick Actions from Table
Click ⋮ menu → "Send Email"

### From Detail View
Three template buttons:
1. **Send Interview Invite**
   - Pre-filled professional invitation
   - Ask for availability
   - Customize as needed

2. **Send Offer**
   - Congratulations message
   - Reference to formal offer letter
   - Set response deadline

3. **Send Rejection**
   - Polite rejection template
   - Professional tone
   - Wish them well

**All templates auto-fill:**
- Candidate name
- Position title
- Professional formatting

---

## 👁️ View Details Dialog

### Personal Information
- Email (clickable mailto link)
- Phone number
- Location
- LinkedIn profile (clickable)

### Professional Background
- Current position
- Current company
- Years of experience
- Expected salary
- Availability

### Application Content
- Full cover letter
- Why interested in role
- View in formatted, scrollable boxes

### Quick Actions in Detail View
- ⭐ Rate candidate (1-5 stars)
- 📝 Update status (dropdown)
- 📄 Add/edit admin notes
- 📧 Send templated emails
- 🗑️ Delete application

---

## 🚀 Keyboard Shortcuts (Future)

Coming soon:
- `N` - Next application
- `R` - Mark as reviewing
- `I` - Move to interview
- `/` - Focus search
- `Esc` - Close dialog

---

## 💾 Export Data

**Export CSV Button:**
- Exports currently filtered results
- Includes: Name, Email, Phone, Position, Experience, Status, Rating, Date
- Filename: `job_applications_YYYY-MM-DD.csv`
- Opens in Excel/Google Sheets

---

## 🎨 Status Color Coding

- 🔵 **Blue** - Submitted (new)
- 🟡 **Yellow** - Under Review
- 🟣 **Purple** - Interview Stage
- 🔴 **Red** - Rejected
- 🟢 **Green** - Hired

---

## 💡 Pro Tips

1. **Use ratings to prioritize**: Rate candidates as you review them
2. **Bulk actions save time**: Review multiple applications, then bulk update
3. **Filter combinations**: Combine status + experience + rating for precise results
4. **Sort by date**: Find oldest unreviewed applications
5. **Sort by rating**: Focus on top-rated candidates
6. **Email templates**: Consistent, professional communication
7. **Admin notes**: Track internal discussion points
8. **Export regularly**: Keep backup CSV files

---

## 📱 Mobile/Tablet Usage

The interface is fully responsive:
- Stats cards stack vertically
- Filters become full-width
- Table scrolls horizontally
- Detail dialog fits screen height
- Touch-friendly buttons

---

## ⚡ Performance

- **Pagination**: Only loads visible rows
- **Instant filtering**: Client-side filtering for speed
- **Indexed database**: Fast queries on large datasets
- **Lazy loading**: Dialogs load content on-demand

---

## 🔒 Security

- **RLS Policies**: Row-level security in database
- **Admin-only access**: Login required for all operations
- **Audit trail ready**: Can add activity logging
- **Data privacy**: Compliant architecture

---

## 🆘 Troubleshooting

**No applications showing:**
- Check RLS policies in Supabase
- Run `fix-rls-policies.sql`

**Can't update status:**
- Verify admin authentication
- Check browser console for errors

**Rating not saving:**
- Run `enhance-job-applications.sql`
- Verify `rating` column exists

**Pagination stuck:**
- Refresh page
- Clear filters
- Check total count at bottom

---

## 📞 Quick Actions Cheat Sheet

| Action | How To |
|--------|--------|
| Sort | Click column header |
| Search | Type in search box |
| Filter | Use dropdown menus |
| Rate | Click stars |
| Select All | Check top checkbox |
| Bulk Update | Select → Click bulk button |
| View Details | ⋮ menu → View Details |
| Send Email | Details → Email button |
| Export | Click Export CSV button |
| Change Page Size | Rows per page dropdown |
| Navigate Pages | Previous/Next buttons |

---

## 🎯 Workflow Recommendations

### Daily Routine
1. Check "New Submissions" count
2. Sort by "Applied" date (newest first)
3. Review and rate new applications
4. Move promising candidates to "Under Review"

### Weekly Review
1. Filter "Under Review" status
2. Sort by rating (highest first)
3. Bulk action: Move top candidates to "Interview"
4. Send bulk interview invites

### Monthly Cleanup
1. Filter old "Rejected" applications
2. Export CSV for records
3. Bulk delete after 90 days
4. Review "Interview" stage candidates

---

Made with ❤️ for efficient recruitment
